/* --- ! Set up these base paths --- */

const PROJECT_ROOT = '../'
const DEV_SRC = 'frontend/src'
const PROD_ROOT = 'backend'

const PROD_STATIC_JS = `${PROD_ROOT}/static_dev/js`
const PROD_STATIC_CSS = `${PROD_ROOT}/static_dev/css`
const PROD_TEMPLATES_HTML = `${PROD_ROOT}/templates`


/* --- paths object --- */

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
