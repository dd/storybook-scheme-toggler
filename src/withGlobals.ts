import { useEffect, useGlobals, useChannel, addons } from "storybook/internal/preview-api";
import type {
	Renderer,
	StoryContext,
	PartialStoryFn as StoryFunction,
} from "storybook/internal/types";
import { global } from '@storybook/global';

import { PARAM_KEY } from './constants';
import { addStyles, clearStyles, getScheme, setScheme } from './helpers';
import outlineCSS from './outlineCSS';


export const withGlobals = (
	StoryFn: StoryFunction<Renderer>,
	context: StoryContext<Renderer>,
) => {
	const [ globals ] = useGlobals();
	const currentValue = globals[PARAM_KEY];
	const params = context.parameters[PARAM_KEY];

	// Set classes
	useEffect(
		() => {
			if (context.viewMode === "docs") {
				// Docs / Autodocs
				const stories = global.document.querySelectorAll('.docs-story');
				const scheme = getScheme(currentValue);
				stories.forEach((story) => {
					setScheme(story, scheme, params.lightModeClass, params.darkModeClass);
				});

			} else {
				// Story page
				setScheme(global.document.documentElement, getScheme(currentValue), params.lightModeClass, params.darkModeClass);
			}

			return () => {
				if (context.viewMode === "story") {
					global.document.documentElement.classList.remove(params.lightModeClass, params.darkModeClass);
				}
			};
		},
		[ currentValue ],
	);

	// Set styles
	useEffect(
		() => {
			addStyles(outlineCSS(params));
			return clearStyles;
		},
		[ context.id ],
	);

	return StoryFn();
};
