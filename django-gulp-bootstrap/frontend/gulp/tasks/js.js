import gulp from "gulp";
import { glob } from "glob";
import webpack from "webpack-stream";
import { deleteAsync } from "del";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import changed from "gulp-changed";
import { paths } from "../config/path.js";


import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// function getFileName(filePath) {
//   const lastSlashIndex = filePath.lastIndexOf("/");
//   const jsExtensionIndex = filePath.lastIndexOf(".js");

//   if (lastSlashIndex !== -1 && jsExtensionIndex !== -1) {
//     return filePath.slice(lastSlashIndex + 1, jsExtensionIndex);
//   }
//   return "";
// }

// const entryFiles = glob.sync(paths.dev.js);

// const entry = {};
// entryFiles.forEach((file) => {
//   const componentName = getFileName(file);
//   entry[componentName] = file;
// });

// const webpackConfig = {
//   mode: "development",
//   entry,
//   output: {
//     filename: "[name].js",
//     path: path.resolve(__dirname, relativeProdJSPath),
//   },
//   resolve: {
//     modules: [__dirname, "node_modules"],
//   },
// };


const webpackConfig = {
  mode: 'development',
  output: {
    filename: 'index.min.js'
  }
}

export function handleJS() {
  return gulp
    .src(paths.dev.js)
    .pipe(changed(paths.prod.js)) // Filter files based on whether they have changed
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(webpack(webpackConfig))
    .pipe(babel({ presets: ["@babel/preset-env"] })) // Transpile JavaScript with Babel
    .pipe(uglify()) // Minify JavaScript
    .pipe(sourcemaps.write(".")) // Write sourcemaps to the same directory
    .pipe(gulp.dest(paths.prod.js));
}

export async function delProdJS() {
  return await deleteAsync([paths.prod.js], { force: true });
}
