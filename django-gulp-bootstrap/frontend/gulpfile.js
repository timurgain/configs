import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { paths } from './gulp/config/path.js';  // <-- Set up your paths before using gulp
import { handleHTML, delProdHTML } from './gulp/tasks/html.js';
import { handleSCSS, delProdSCSS } from './gulp/tasks/scss.js';
import { handleJS, delProdJS } from './gulp/tasks/js.js';
import { handleFonts, delProdFonts } from './gulp/tasks/fonts.js';
import { handleImages, delProdImages } from './gulp/tasks/images.js';


// Watch and run task if there is a file change
function watcher() {
  gulp.watch(paths.watch.html, gulp.series(handleHTML))
    .on('error', plumber); // Use gulp-plumber for error handling;

  gulp.watch(paths.watch.scss, gulp.series(handleSCSS))
    .on('error', plumber);

  gulp.watch(paths.watch.js, gulp.series(handleJS))
    .on('error', plumber);

  gulp.watch(paths.watch.fonts, gulp.series(handleFonts))
    .on('error', plumber);
  
  gulp.watch(paths.watch.images, gulp.series(handleImages))
    .on('error', plumber);

};


// Task execution scenarios
const dev = gulp.series(
  gulp.parallel(delProdHTML, delProdSCSS, delProdJS, delProdFonts, delProdImages),
  gulp.parallel(handleHTML, handleSCSS, handleJS, handleFonts, handleImages),
  watcher
)

// Main usage --> Run default scenario in the terminal command: "gulp"
gulp.task('default', dev)

// Manual if needed, for example: "gulp handleJS"
gulp.task('handleJS', handleJS);
gulp.task('delProdJS', delProdJS);

gulp.task('handleSCSS', handleSCSS);
gulp.task('delProdSCSS', delProdSCSS);

gulp.task('handleHTML', handleHTML);
gulp.task('delProdHTML', delProdHTML);

gulp.task('handleFonts', handleFonts);
gulp.task('delProdFonts', delProdFonts);

gulp.task('handleImages', handleImages);
gulp.task('delProdImages', delProdImages);

gulp.task('delProd', gulp.series(delProdJS, delProdSCSS, delProdHTML, delProdFonts, delProdImages))
