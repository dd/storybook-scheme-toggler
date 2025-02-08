<div style="margin: 0 auto; text-align: left; padding-bottom: 20px;">
  <img src="https://raw.githubusercontent.com/dd/storybook-scheme-toggler/main/.github/media/storiybook_icon.svg" alt="Storybook Preview Scheme Toggler Logo" width="64" height="64" align="center">
</div>


# Storybook Preview Scheme Toggler

**Storybook Preview Scheme Toggler** allows you to easily switch between light, dark, and auto (browser-synced) themes directly from the Storybook toolbar.

<p>
	<img src="https://raw.githubusercontent.com/dd/storybook-scheme-toggler/main/.github/media/preview.gif" width="560" alt="Demonstration of Storybook Preview Scheme Toggler in action" />
</p>

[Live Demo](https://dd.github.io/storybook-scheme-toggler/?path=/docs/preview--docs)


## Installation

First, install the package:

```sh
npm install --save-dev storybook-preview-scheme-toggler
```

Then, register it as an addon in `.storybook/main.js`:

```js
export default {
	addons: [
		'storybook-preview-scheme-toggler',
	],
};
```


## Usage

After adding the addon to your Storybook configuration, a button will appear in the **Toolbar** panel to toggle themes.


### Viewing Two Schemes Simultaneously

If you need to display both light and dark schemes within a single story, create a container with the class `sbpst-scheme_preview`:

```jsx
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
```

These schemes will not be affected by the toolbar toggle state.

By default, the schemes are displayed in a column layout. If you need them side by side, add the `sbpst-row` class to the `sbpst-scheme_preview` container, and both themes will be arranged horizontally.


## Configuration

This addon adds the following parameters to Storybook under the `previewSchemeToggler` namespace:

```js
export default {
	parameters: {
		previewSchemeToggler: {
			darkBackground: '#ffffff',
			lightBackground: '#000000',
			darkColor: '#000000',
			lightColor: '#ffffff',
			darkModeClass: 'dark',
			lightModeClass: 'light',
		},
	},
};
```


### darkBackground

Background color for the dark scheme. Default: `#121212`.


### lightBackground

Background color for the light scheme. Default: `#f1f1f1`.


### darkColor

Text color for the dark scheme. Default: `#c9cdcf`.


### lightColor

Text color for the light scheme. Default: `#2e3438`.


### darkModeClass

Class for the dark scheme. Default: `sbpst-dark`.


### lightModeClass

Class for the light scheme. Default: `sbpst-light`.

