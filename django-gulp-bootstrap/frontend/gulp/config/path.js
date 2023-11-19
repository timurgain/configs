/* --- ! Set up these base paths --- */

const PROJECT_ROOT = '../'
const DEV_SRC = 'frontend/src'
const PROD_ROOT = 'backend'

const PROD_STATIC_JS = `${PROD_ROOT}/static/js`
const PROD_STATIC_CSS = `${PROD_ROOT}/static/css`
const PROD_STATIC_FONTS = `${PROD_ROOT}/static/fonts`
const PROD_STATIC_IMAGES = `${PROD_ROOT}/static/images`
const PROD_TEMPLATES_HTML = `${PROD_ROOT}/templates`


/* --- paths object --- */

export const paths = {
  PROJECT_ROOT,
  DEV_SRC,
  PROD_STATIC_JS,
  PROD_STATIC_CSS,
  PROD_STATIC_FONTS,
  PROD_STATIC_IMAGES,
  PROD_TEMPLATES_HTML,

  prod: {
    html:   `${PROJECT_ROOT}${PROD_TEMPLATES_HTML}/`,
    scss:   `${PROJECT_ROOT}${PROD_STATIC_CSS}/`,
    js:     `${PROJECT_ROOT}${PROD_STATIC_JS}/`,
    fonts:  `${PROJECT_ROOT}${PROD_STATIC_FONTS}/`,
    images: `${PROJECT_ROOT}${PROD_STATIC_IMAGES}/`,
  },

  dev: {
    html:   `${PROJECT_ROOT}${DEV_SRC}/**/*.html`,
    scss:   `${PROJECT_ROOT}${DEV_SRC}/assets/styles/index.scss`,
    js:     `${PROJECT_ROOT}${DEV_SRC}/**/*.js`,
    fonts:  `${PROJECT_ROOT}${DEV_SRC}/assets/fonts/*.{woff,woff2}`,
    images: `${PROJECT_ROOT}${DEV_SRC}/assets/images/*.{jpg,jpeg,bmp,png,svg}`,

  },

  watch: {
    html:   `${PROJECT_ROOT}${DEV_SRC}/**/*.html`,
    scss:   `${PROJECT_ROOT}${DEV_SRC}/**/*.scss`,
    js:     `${PROJECT_ROOT}${DEV_SRC}/**/*.js`,
    fonts:  `${PROJECT_ROOT}${DEV_SRC}/**/*.{woff,woff2}`,
    images: `${PROJECT_ROOT}${DEV_SRC}/**/*.{jpg,jpeg,bmp,png,svg}`,
  }
}
