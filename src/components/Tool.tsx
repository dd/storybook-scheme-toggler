import React, { memo, useCallback } from 'react';

import { useGlobals, useParameter } from 'storybook/internal/manager-api';
import { IconButton } from 'storybook/internal/components';
import { StopAltHollowIcon, StopAltIcon, MirrorIcon } from '@storybook/icons';

import { ADDON_ID, PARAM_KEY, TOOL_ID, SCHEME_CODE_AUTO, SCHEME_CODE_DARK, SCHEME_CODE_LIGHT } from '../constants';


const getIcon = (scheme) => {
	if (scheme === SCHEME_CODE_LIGHT) {
		return <StopAltHollowIcon />;
	}

	if (scheme === SCHEME_CODE_DARK) {
		return <StopAltIcon />;
	}

	return <MirrorIcon /> ;
};

export const Tool = memo(() => {
	const [ globals, updateGlobals ] = useGlobals();

	const parameters = useParameter(PARAM_KEY, {});
	const currentScheme = globals[PARAM_KEY];

	const toggleScheme = useCallback(
		() => {
			if (parameters.enableAutoMode) {
				// `auto` -> `dark` -> `light`
				if (currentScheme === SCHEME_CODE_AUTO) {
					updateGlobals({ [PARAM_KEY]: SCHEME_CODE_DARK });
				} else if (currentScheme === SCHEME_CODE_DARK) {
					updateGlobals({ [PARAM_KEY]: SCHEME_CODE_LIGHT });
				} else {
					updateGlobals({ [PARAM_KEY]: SCHEME_CODE_AUTO });
				}

			} else {
				// `dark` -> `light`
				if (currentScheme === SCHEME_CODE_DARK) {
					updateGlobals({ [PARAM_KEY]: SCHEME_CODE_LIGHT });
				} else {
					updateGlobals({ [PARAM_KEY]: SCHEME_CODE_DARK });
				}
			}
		},
		[ currentScheme ],
	);

	return (
		<IconButton
			key={TOOL_ID}
			title="Scheme toogler"
			onClick={toggleScheme}
		>
			{getIcon(currentScheme)}
		</IconButton>
	);
});
