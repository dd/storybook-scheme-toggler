export default function outlineCSS(params) {
	return /* css */ `
:root.${params.lightModeClass},
.docs-story.${params.lightModeClass},
.sbpst-scheme_preview .${params.lightModeClass} {
	color-scheme: only light;
}

:root.${params.darkModeClass},
.docs-story.${params.darkModeClass},
.sbpst-scheme_preview .${params.darkModeClass} {
	color-scheme: only dark;
}

:where(:root),
:where(.docs-story),
:where(.sbpst-scheme_preview .${params.lightModeClass}),
:where(.sbpst-scheme_preview .${params.darkModeClass}) {
	background-color: light-dark(${params.lightBackground}, ${params.darkBackground});
}

:root:has(.sbpst-scheme_preview),
:root:has(.sbpst-scheme_preview) body,
:root:has(.sbpst-scheme_preview) body #storybook-root {
	height: 100%;
}

:where(.sbpst-scheme_preview) {
	display: flex;
	flex-direction: column;
	min-height: 100%;
	flex-wrap: wrap;
}

:where(.sbpst-scheme_preview.sbpst-row) {
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	min-width: 100%;
	width: 100%;
	max-width: 100%;
}

:where(.sbpst-scheme_preview .${params.lightModeClass}),
:where(.sbpst-scheme_preview .${params.darkModeClass}) {
	flex-shrink: 1;
	flex-grow: 1;
	padding: 24px;
	overflow: hidden;
	box-sizing: border-box;
	min-height: 50%;
	height: 50%;
	min-width: 100%;
	width: 100%;
	max-width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
}

:where(.sbpst-scheme_preview.sbpst-row .${params.lightModeClass}),
:where(.sbpst-scheme_preview.sbpst-row .${params.darkModeClass}) {
	min-height: auto;
	height: auto;
	min-width: 50%;
	width: 50%;
	max-width: 50%;
}
	`;
}
