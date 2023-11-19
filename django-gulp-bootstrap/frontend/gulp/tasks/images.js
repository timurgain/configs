import gulp from 'gulp';
import { deleteAsync } from 'del';
import changed from 'gulp-changed';
import { paths } from '../config/path.js';


export function handleImages() {
  return gulp.src(paths.dev.images)
    .pipe(changed(paths.prod.images)) // Filter files based on whether they have changed
    .pipe(gulp.dest(paths.prod.images));
}

export async function delProdImages() {
  return await deleteAsync([paths.prod.images], { force: true })
}
