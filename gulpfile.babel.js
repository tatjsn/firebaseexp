import gulp from 'gulp';
import webpack from 'webpack-stream';

gulp.task('js', () =>
  gulp.src('src/js/entry.js')
      .pipe(webpack({
        module: {
          loaders: [
            { test : /\.js$/, exclude: /node_modules/, loader: 'babel' }
          ]
        },
        output: {
          filename: 'bundle.js'
        }
      }))
      .pipe(gulp.dest('dist')));

gulp.task('html', () =>
  gulp.src('src/html/*.html')
      .pipe(gulp.dest('dist')));

gulp.task('default', ['js', 'html']);
