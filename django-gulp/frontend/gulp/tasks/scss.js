import gulp from 'gulp';
import { deleteAsync } from 'del';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import { paths } from '../config/path.js';


// export function handleSCSS() {
//   return gulp.src(paths.dev.scss)
//     .pipe(changed(paths.prod.scss)) // Check if source files have changed
//     .pipe(plumber()) // Error handling
//     .pipe(sourcemaps.init()) // Initialize sourcemaps
//     .pipe(sass().on('error', sass.logError)) // Compile Sass to CSS
//     .pipe(autoprefixer()) // Add vendor prefixes
//     .pipe(sourcemaps.write()) // Write sourcemaps
//     .pipe(cleanCSS()) // Minify CSS
//     .pipe(gulp.dest(paths.prod.scss));
// }

export function handleSCSS() {
  return gulp.src(paths.dev.scss)
    .pipe(changed(paths.prod.scss)) // Check if source files have changed

    .pipe(plumber()) // Error handling
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(sass().on('error', sass.logError)) // Compile Sass to CSS
    .pipe(autoprefixer()) // Add vendor prefixes
    .pipe(rename({extname: ".min.css"}))
    .pipe(sourcemaps.write()) // Write sourcemaps
    .pipe(cleanCSS()) // Minify CSS
    .pipe(gulp.dest(paths.prod.scss));
}


export async function delProdSCSS() {
  return await deleteAsync([paths.prod.scss], { force: true })
}
