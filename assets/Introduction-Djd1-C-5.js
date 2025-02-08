import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CePRvBtH.js";import{ak as s,al as a}from"./index-BhcC4si2.js";import"./index-DmM0KDA7.js";import"./iframe-CqbVu_An.js";import"../sb-preview/runtime.js";import"./index-nLeaPAJ8.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const l=`# Storybook Preview Scheme Toggler

**Storybook Preview Scheme Toggler** allows you to easily switch between light, dark, and auto (browser-synced) themes directly from the Storybook toolbar.


## Installation

First, install the package:

\`\`\`sh
npm install --save-dev storybook-preview-scheme-toggler
\`\`\`

Then, register it as an addon in \`.storybook/main.js\`:

\`\`\`js
export default {
	addons: [
		'storybook-preview-scheme-toggler',
	],
};
\`\`\`


## Usage

After adding the addon to your Storybook configuration, a button will appear in the **Toolbar** panel to toggle themes.


### Viewing Two Schemes Simultaneously

If you need to display both light and dark schemes within a single story, create a container with the class \`sbpst-scheme_preview\`:

\`\`\`jsx
export const TwoSchemes = {
	parameters: { layout: 'fullscreen' },
	render: (args) => (
		<div className="sbpst-scheme_preview">
			<div className="sbpst-light">
				...
			</div>
			<div className="sbpst-dark">
				...
			</div>
		</div>
	),
};
\`\`\`

These schemes will not be affected by the toolbar toggle state.

By default, the schemes are displayed in a column layout. If you need them side by side, add the \`sbpst-row\` class to the \`sbpst-scheme_preview\` container, and both themes will be arranged horizontally.


## Configuration

This addon adds the following parameters to Storybook under the \`previewSchemeToggler\` namespace:

\`\`\`js
export default {
	parameters: {
		previewSchemeToggler: {
			darkBackground: '#ffffff',
			lightBackground: '#000000',
			darkModeClass: 'dark',
			lightModeClass: 'light',
		},
	},
};
\`\`\`


### darkBackground

Background color for the dark scheme. Default: \`#121212\`.


### lightBackground

Background color for the light scheme. Default: \`#f1f1f1\`.


### darkColor

Text color for the dark scheme. Default: \`#c9cdcf\`.


### lightColor

Text color for the light scheme. Default: \`#2e3438\`.


### darkModeClass

Class for the dark scheme. Default: \`sbpst-dark\`.


### lightModeClass

Class for the light scheme. Default: \`sbpst-light\`.

`;function o(e){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Introduction"}),`
`,t.jsx(a,{children:l})]})}function b(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o()}export{b as default};
