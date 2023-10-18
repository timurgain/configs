import path from 'path'

/* ===== Root paths ===== */
// const PROJECT_ROOT = path.basename(path.resolve())
const PROJECT_ROOT = '../'

const DEV_SRC  = 'frontend/src'
const PROD_STATIC_JS = 'web/static_dev/js'
const PROD_STATIC_CSS = 'web/static_dev/css'
const PROD_TEMPLATES_HTML = 'web/templates'

/* ===== Files' paths ===== */
export const paths = {
  PROJECT_ROOT,
  DEV_SRC,
  PROD_STATIC_JS,
  PROD_STATIC_CSS,
  PROD_TEMPLATES_HTML,

  prod: {
    html: `${PROJECT_ROOT}${PROD_TEMPLATES_HTML}/`,
    scss: `${PROJECT_ROOT}${PROD_STATIC_CSS}/`,
    js:   `${PROJECT_ROOT}${PROD_STATIC_JS}/`,
  },

  dev: {
    html: `${PROJECT_ROOT}${DEV_SRC}/**/*.html`,
    scss: `${PROJECT_ROOT}${DEV_SRC}/style.scss`,
    js:   `${PROJECT_ROOT}${DEV_SRC}/**/*.js`,
  },

  watch: {
    html: `${PROJECT_ROOT}${DEV_SRC}/**/*.html`,
    scss: `${PROJECT_ROOT}${DEV_SRC}/**/*.scss`,
    js:   `${PROJECT_ROOT}${DEV_SRC}/**/*.js`,
  }

}
