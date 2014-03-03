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
          baseUrl: "public/js/",
          paths: {
            jquery: 'lib/jquery-1.11.0.min',
            backbone: 'lib/backbone-min',
            underscore: 'lib/underscore-min',
            moment: 'lib/moment.min',
            plax: 'lib/plax.min',
            requireLib: 'lib/require.min'
          },
          mainConfigFile: "public/js/main.js",
          include: ['requireLib'],
          out: "public/js/dist/main.min.js"
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