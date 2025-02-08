/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type { ProjectAnnotations, Renderer } from 'storybook/internal/types';

import { PARAM_KEY, SCHEME_CODE_AUTO } from './constants';
import { withGlobals } from './withGlobals';


/**
 * Note: if you want to use JSX in this file, rename it to `preview.tsx`
 * and update the entry prop in tsup.config.ts to use "src/preview.tsx",
 */

const preview: ProjectAnnotations<Renderer> = {
	decorators: [ withGlobals ],
	initialGlobals: {
		[PARAM_KEY]: SCHEME_CODE_AUTO,
	},
	parameters: {
		[PARAM_KEY]: {
			darkBackground: '#121212',
			lightBackground: '#f1f1f1',
			darkColor: '#c9cdcf',
			lightColor: '#2e3438',
			darkModeClass: 'sbpst-dark',
			lightModeClass: 'sbpst-light',
		},
	},
};

export default preview;
