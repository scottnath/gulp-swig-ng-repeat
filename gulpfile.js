'use strict';
var gulp = require('gulp');
var frontMatter = require('front-matter');
var swig = require('gulp-swig');
var data = require('gulp-data');

/*
  Get data via front matter
*/
gulp.task('fm-test', function() {
  return gulp.src('./patterns/**/*.html')
    .pipe(data(function(file) {
      var content = frontMatter(String(file.contents));
      file.contents = new Buffer(content.body);
      console.log(content.attributes)
      return content.attributes;
    }))
    .pipe(swig())
    .pipe(gulp.dest('build'));
});
