import { global } from '@storybook/global';

import { STYLES_ID, SCHEME_CODE_DARK, SCHEME_CODE_LIGHT } from './constants';


export const clearStyles = () => {
	const element = global.document.getElementById(STYLES_ID);
	if (element) {
		element.removeChild(element);
	}
};


export const addStyles = (css: string) => {
	const existingStyle = global.document.getElementById(STYLES_ID);

	if (existingStyle) {
		if (existingStyle.innerHTML !== css) {
			existingStyle.innerHTML = css;
		}

	} else {
		const style = global.document.createElement('style');
		style.setAttribute('id', STYLES_ID);
		style.innerHTML = css;
		global.document.head.appendChild(style);
	}
};


export const getScheme = (value) => {
	if (value === SCHEME_CODE_DARK || value === SCHEME_CODE_LIGHT) {
		return value;
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return SCHEME_CODE_DARK;
	}

	return SCHEME_CODE_LIGHT;
};


export const setScheme = (element, theme: string, lightClass: string, darkClass: string) => {
	if (theme === SCHEME_CODE_DARK) {
		element.classList.add(darkClass);
		element.classList.remove(lightClass);

	} else {
		element.classList.remove(darkClass);
		element.classList.add(lightClass);
	}
};
