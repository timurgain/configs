import gulp from 'gulp';
import { deleteAsync } from 'del';
import changed from 'gulp-changed';
import { paths } from '../config/path.js';


export function handleFonts() {
  return gulp.src(paths.dev.fonts)
    .pipe(changed(paths.prod.fonts)) // Filter files based on whether they have changed
    .pipe(gulp.dest(paths.prod.fonts));
}

export async function delProdFonts() {
  return await deleteAsync([paths.prod.fonts], { force: true })
}
