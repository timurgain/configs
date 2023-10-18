import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { paths } from './gulp/config/path.js';
import { handleHTML, delProdHTML } from './gulp/tasks/html.js';
import { handleSCSS, delProdSCSS } from './gulp/tasks/scss.js';
import { handleJS, delProdJS } from './gulp/tasks/js.js';


// TODO: images and fonts handlers


// Manual run if needed
gulp.task('handleJS', handleJS);
gulp.task('delProdJS', delProdJS);

gulp.task('handleSCSS', handleSCSS);
gulp.task('delProdSCSS', delProdSCSS);

gulp.task('handleHTML', handleHTML);
gulp.task('delProdHTML', delProdHTML);

gulp.task('delProd', gulp.series(delProdJS, delProdSCSS, delProdHTML))


// Watch for changes then run
function watcher() {
  gulp.watch(paths.watch.html, gulp.series(handleHTML))
    .on('error', plumber); // Use gulp-plumber for error handling;

  gulp.watch(paths.watch.scss, gulp.series(handleSCSS))
    .on('error', plumber);

  gulp.watch(paths.watch.js, gulp.series(handleJS))
    .on('error', plumber);
};


// Task execution scenarios
const dev = gulp.series(
  gulp.parallel(delProdHTML, delProdSCSS, delProdJS),
  gulp.parallel(handleHTML, handleSCSS, handleJS),
  watcher
)

gulp.task('default', dev)
