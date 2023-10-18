import gulp from 'gulp';
import { deleteAsync } from 'del';
import changed from 'gulp-changed';
import { paths } from '../config/path.js';


export function handleHTML() {
  return gulp.src(paths.dev.html)
    .pipe(changed(paths.prod.html)) // Filter files based on whether they have changed
    .pipe(gulp.dest(paths.prod.html));
}

export async function delProdHTML() {
  return await deleteAsync([paths.prod.html], { force: true })
}
