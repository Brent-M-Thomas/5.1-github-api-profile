var merge = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var injectLivereload = require('broccoli-inject-livereload');

var publicWithReload = injectLivereload('public');

var includePaths = [
    'assets/scss',
    'bower_components/reset-css',
    'bower_components/fontawesome/scss',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/neat/app/assets/stylesheets'
];

funnel('bower_components', {
  files:['jquery/dist/jquery.min.js']
});

var compiledCSS = sass(includePaths, 'app.scss', 'app.css');

module.exports = merge(['public', 'bower_components', 'assets/js', compiledCSS ]);

