import type { Preview } from "@storybook/react-vite";

import './styles.css';


const preview: Preview = {
	parameters: {
		backgrounds: { disabled: true },
		reactStrictMode: false,
	},
};

export default preview;
