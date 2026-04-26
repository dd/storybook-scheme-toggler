import { createRequire } from "node:module";

const require = createRequire(import.meta.url);


/**
 * to load the built addon in this test Storybook
 */
function previewAnnotations(entry = []) {
  return [...entry, require.resolve("../dist/preview.js")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("../dist/manager.js")];
}

export default {
  managerEntries,
  previewAnnotations,
};
