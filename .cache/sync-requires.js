const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/matthewshade/imagepalooza/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/matthewshade/imagepalooza/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/matthewshade/imagepalooza/src/pages/index.tsx"))),
  "component---src-pages-profile-tsx": hot(preferDefault(require("/Users/matthewshade/imagepalooza/src/pages/profile.tsx"))),
  "component---src-templates-template-tsx": hot(preferDefault(require("/Users/matthewshade/imagepalooza/src/templates/template.tsx")))
}

