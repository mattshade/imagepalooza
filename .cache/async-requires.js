// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-profile-tsx": () => import("./../src/pages/profile.tsx" /* webpackChunkName: "component---src-pages-profile-tsx" */),
  "component---src-templates-template-tsx": () => import("./../src/templates/template.tsx" /* webpackChunkName: "component---src-templates-template-tsx" */)
}

