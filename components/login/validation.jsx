export const validateEmail = (email) => {
	if (email.length === 0) {
		return 'Email address required';
	} else if (!(/.+@.+\.+/.test(email))) {
		return 'Invalid email address';
	}

	return '';
};
export const validatePassword = (password) => {
	if (password.length === 0) return 'Password required';
	return '';
};

