
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sabores-argentinos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sabores-argentinos"
  },
  {
    "renderMode": 2,
    "route": "/sabores-argentinos/carta"
  },
  {
    "renderMode": 2,
    "route": "/sabores-argentinos/catering"
  },
  {
    "renderMode": 2,
    "route": "/sabores-argentinos/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sabores-argentinos",
    "route": "/sabores-argentinos/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7437, hash: 'e647d14d0fb40ed2f190efa3930c6d96bd359d7ec8bf2429506f28d1c558898f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 974, hash: '07b4d012f9d9570b89e23b4c7f5eb87a85431c737719261a40f3e48374aa11f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17906, hash: 'fe4a39cd66af3719e19c65930f06b5ff5f50246f945169778abaf67b339b351e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'catering/index.html': {size: 15888, hash: '96f036f0964f767f336453761ec7bc828b51b19531a7e85ade37a4035e81215f', text: () => import('./assets-chunks/catering_index_html.mjs').then(m => m.default)},
    'carta/index.html': {size: 19913, hash: '30e34aa09e3240d5cf247c09a52aa57801ff5ad45a126a6895cff27a5359586b', text: () => import('./assets-chunks/carta_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 15947, hash: '11390e9d2e9e7fbefdbdda32196801836d99fb27b47a9fc8cbb3776417de1228', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-GAYQQIXC.css': {size: 11829, hash: '5em5SYeFw7c', text: () => import('./assets-chunks/styles-GAYQQIXC_css.mjs').then(m => m.default)}
  },
};
