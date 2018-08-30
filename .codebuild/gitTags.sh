#!/usr/bin/env bash
# FROM: https://stackoverflow.com/questions/47657423/get-github-git-branch-for-aws-codebuild

export GIT_BRANCH=`git symbolic-ref HEAD --short 2>/dev/null`
if [ "$GIT_BRANCH" == "" ] ; then
  GIT_BRANCH=`git branch -a --contains HEAD | sed -n 2p | awk '{ printf $1 }'`
  export GIT_BRANCH=${CODEBUILD_GIT_BRANCH#remotes/origin/}
fi

export GIT_MESSAGE=`git log -1 --pretty=%B`
export GIT_AUTHOR=`git log -1 --pretty=%an`
export GIT_AUTHOR_EMAIL=`git log -1 --pretty=%ae`
export GIT_COMMIT=`git log -1 --pretty=%H`
export GIT_TAG=`git describe --tags --abbrev=0`

echo "==> Setting GIT Environment Variables:"
set
echo "==> GIT_AUTHOR = $GIT_AUTHOR"
echo "==> GIT_AUTHOR_EMAIL = $GIT_AUTHOR_EMAIL"
echo "==> GIT_BRANCH = $GIT_BRANCH "
echo "==> GIT_COMMIT = $GIT_COMMIT"
echo "==> GIT_MESSAGE = $GIT_MESSAGE"
echo "==> GIT_TAG = $GIT_TAG"


