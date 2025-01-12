import { addons, types } from 'storybook/internal/manager-api';

import { Tool } from './components/Tool';
import { ADDON_ID, TOOL_ID } from './constants';

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

// Register the addon
addons.register(ADDON_ID, () => {
	// Register a tool
	addons.add(TOOL_ID, {
		title: "Preview Scheme Toggler",
		type: types.TOOL,
		// match: ({ viewMode, tabId }) => !tabId && viewMode === 'story',
		match: ({ tabId }) => !tabId,
		render: Tool,
	});
});
