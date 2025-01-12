export default function outlineCSS(lightClass: string, darkClass: string) {
	return /* css */ `
:root.${lightClass}, .docs-story.${lightClass} {
	color-scheme: only light;
}

:root.${darkClass}, .docs-story.${darkClass} {
	color-scheme: only dark;
}

:root, .docs-story {
	background-color: light-dark(#ffffff, #121212)
}
	`;
}
