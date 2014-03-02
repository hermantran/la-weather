module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['public/js/**/*.js', '!**/*.min.js', '!public/js/lib/**/*.js']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          'public/css/styles.min.css': 'scss/main.scss'  
        }
      }
    },
    
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "js/",
          paths: {
            jquery: 'empty:',
            backbone: 'empty:',
            underscore: 'empty:',
            requireLib: 'libs/require.min'
          },
          mainConfigFile: "js/main.js",
          include: ['requireLib'],
          out: "js/dist/main.min.js"
        }
      }
    },
    
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
};