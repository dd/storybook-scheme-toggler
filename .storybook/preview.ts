import type { Preview } from "@storybook/react";

import './styles.css';


const preview: Preview = {
	parameters: {
		backgrounds: { disable: true },
		reactStrictMode: false,
	},
};

export default preview;
