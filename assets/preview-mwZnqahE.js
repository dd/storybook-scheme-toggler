const{useGlobals:b,useEffect:h}=__STORYBOOK_MODULE_PREVIEW_API__,{global:r}=__STORYBOOK_MODULE_GLOBAL__;var u="storybook-preview-scheme-toggler",d="previewSchemeToggler",a=`${u}-styles`,M="auto",i="dark",c="light",k=()=>{let e=r.document.getElementById(a);e&&e.parentElement.removeChild(e)},v=e=>{let s=r.document.getElementById(a);if(s)s.innerHTML!==e&&(s.innerHTML=e);else{let t=r.document.createElement("style");t.setAttribute("id",a),t.innerHTML=e,r.document.head.appendChild(t)}},n=e=>e===i||e===c?e:window.matchMedia("(prefers-color-scheme: dark)").matches?i:c,m=(e,s,t,l)=>{s===i?(e.classList.add(l),e.classList.remove(t)):(e.classList.remove(l),e.classList.add(t))};function C(e){return`
:root.${e.lightModeClass},
.docs-story.${e.lightModeClass},
.sbpst-scheme_preview .${e.lightModeClass} {
	color-scheme: only light;
}

:root.${e.darkModeClass},
.docs-story.${e.darkModeClass},
.sbpst-scheme_preview .${e.darkModeClass} {
	color-scheme: only dark;
}

:where(:root),
:where(.docs-story),
:where(.sbpst-scheme_preview .${e.lightModeClass}),
:where(.sbpst-scheme_preview .${e.darkModeClass}) {
	background-color: light-dark(${e.lightBackground}, ${e.darkBackground});
	color: light-dark(${e.lightColor}, ${e.darkColor});
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

:where(.sbpst-scheme_preview .${e.lightModeClass}),
:where(.sbpst-scheme_preview .${e.darkModeClass}) {
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

:where(.sbpst-scheme_preview.sbpst-row .${e.lightModeClass}),
:where(.sbpst-scheme_preview.sbpst-row .${e.darkModeClass}) {
	min-height: auto;
	height: auto;
	min-width: 50%;
	width: 50%;
	max-width: 50%;
}
	`}var _=(e,s)=>{let[t]=b(),l=t[d],o=s.parameters[d];return h(()=>{if(s.viewMode==="docs"){let p=r.document.querySelectorAll(".docs-story"),w=n(l);p.forEach(g=>{m(g,w,o.lightModeClass,o.darkModeClass)})}else m(r.document.documentElement,n(l),o.lightModeClass,o.darkModeClass);return()=>{s.viewMode==="story"&&r.document.documentElement.classList.remove(o.lightModeClass,o.darkModeClass)}},[l]),h(()=>(v(C(o)),k),[s.id]),e()},f={decorators:[_],initialGlobals:{[d]:M},parameters:{[d]:{darkBackground:"#121212",lightBackground:"#f1f1f1",darkColor:"#c9cdcf",lightColor:"#2e3438",darkModeClass:"sbpst-dark",lightModeClass:"sbpst-light"}}},y=f;export{y as default};
