import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Preview",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	tags: ["autodocs"],
};

export const Preview = {
	parameters: { layout: 'centered' },
};

export const SchemesPreviewColumn = {
	parameters: { layout: 'fullscreen' },
	render: (args) => (
		<div className="sbpst-scheme_preview">
			<div className="sbpst-light">
				<Button {...args} />
			</div>
			<div className="sbpst-dark">
				<Button {...args} />
			</div>
		</div>
	),
};

export const SchemesPreviewRow = {
	parameters: { layout: 'fullscreen' },
	render: (args) => (
		<div className="sbpst-scheme_preview sbpst-row">
			<div className="sbpst-light">
				<Button {...args} />
			</div>
			<div className="sbpst-dark">
				<Button {...args} />
			</div>
		</div>
	),
};
