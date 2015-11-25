import gulp from 'gulp';
import util from 'gulp-util';
import webpack from 'webpack-stream';

const webpackPlugins = util.env.production ? [
  new webpack.webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: false
  })
] : [];

gulp.task('js', () =>
  gulp.src('src/js/entry.js')
      .pipe(webpack({
        module: {
          loaders: [
            { test : /\.js$/, exclude: /node_modules/, loader: 'babel' }
          ]
        },
        plugins: webpackPlugins,
        output: {
          filename: 'bundle.js'
        }
      }))
      .pipe(gulp.dest('dist')));

gulp.task('html', () =>
  gulp.src('src/html/*.html')
      .pipe(gulp.dest('dist')));

gulp.task('default', ['js', 'html']);
