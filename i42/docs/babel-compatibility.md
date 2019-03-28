## Babel.  

This documents the babel set up required in projects using this module, as it is slightly different to the way that the original version recommends.

The original salesforce implementation requires that either the CommonJS version is used (available in the npm version). 

See the following documentation [usage](../../README.md#usage).


As we are going to be installing direct from git, we don't have this and in any case it would be easier to use the source directly.  The salesforce documentation recommends that we install the ```@salesforce/babel-preset-design-system-react``` preset to babel.  However that didn't really work for us for a number of reasons:-

- We upgraded out repo to Babel 7 and the preset is Babel6, so no longer worked.

In the end we made the following changes to our repository :-

- Moved to using babel.config.js ( this was due to a different way that babel 7 manages .babelrc - imported packages no longer see project .babelrc files.  See (https://babeljs.io/docs/en/config-files#file-relative-configuration))
- Added the following presets:
	- "@babel/preset-react"
	- "@babel/preset-env"
- Added the following plugins:
	- "@babel/plugin-proposal-export-default-from",
	- "@babel/plugin-proposal-object-rest-spread",
	- "@babel/plugin-proposal-class-properties",
	
We also had to change the webpack.config.js (and jest.config.js) so that babel was also being used for the imported node_module.  
This enabled babel to transpile files node_modules/@i42/design-system-react directory (which was disabled by default).

```js
module.exports.module.rules[x] = {
	test: /\.jsx?$/,
	loader: 'babel-loader',
	include: [
		path.join(__dirname, 'node_modules/@i42/design-system-react')
	],
	exclude: /@i42\/design-system-react\/node_modules/,

}
```


Jest also needs babel to work, so the following changes were made to jest.config.js (or could be in package.json).

transformIgnorePatterns defaults to node_modules, so would exclude this module being built if imported through npm.  
So we just add a regex to not ignore node_modules/@i42/design-system-react, but to ingnore all other node_modules.  

```js
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
   transformIgnorePatterns: [
     "node_modules\\/((?!@i42\\/design-system-react).)*$"
   ]
```




	
Our babel.config.js file:-

```js
module.exports = function (api) {

    // TODO: not too clear on how the caching works for now.
    // docs are not clear https://babeljs.io/docs/en/babelconfigjs
    // some form of caching is required otherwise babel isnt going to work
    // note disabling the cache as below is not recommended (as its slow), but until it is clear how this works this seems the safest option
    api.cache(false);

    const presets = [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": [
                        "last 2 versions",
                        "ie 11"
                    ],
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react"
    ];

    const plugins = [
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        ["@babel/plugin-transform-runtime", {
            "corejs": false,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }]
    ];

    return {
        presets,
        plugins
    };

}
```
