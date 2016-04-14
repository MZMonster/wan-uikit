var grunt = require('grunt');
var Autoprefix = require('less-plugin-autoprefix');
var CleanCss = require('less-plugin-clean-css');

var LESS_ENTRY = ['less'];

grunt.initConfig({
  less: {
    development: {
      options: {
        paths: LESS_ENTRY,
        sourceMap: true,
        sourceMapBasepath: 'dist',
        sourceMapFilename: 'wan-uikit.css.map'
      },
      files: {
        'dist/wan-uikit.css': 'less/entry.less'
      }
    },
    production: {
      options: {
        paths: LESS_ENTRY,
        plugins: [
          new Autoprefix({ browsers: ["last 10 versions"] }),
          new CleanCss()
        ]
      },
      files: {
        'dist/wan-uikit.min.css': 'less/entry.less'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('build', ['less:dev']);

grunt.registerTask('default', ['build']);
