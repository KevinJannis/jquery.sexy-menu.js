module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['src/css/jquery.sexy-menu.css', 'src/js/jquery.sexy-menu.js'],
      tasks: ['copy', 'uglify', 'cssmin', 'usebanner']
    },

    copy: {
      main: {
        files: [
          { expand: false, src: ['src/css/jquery.sexy-menu.css'], dest: 'dist/css/jquery.sexy-menu.css', filter: 'isFile' },
          { expand: false, src: ['src/js/jquery.sexy-menu.js'], dest: 'dist/js/jquery.sexy-menu.js', filter: 'isFile' }
        ]
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/jquery.sexy-menu.min.js': ['dist/js/jquery.sexy-menu.js']
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/css/jquery.sexy-menu.min.css': ['dist/css/jquery.sexy-menu.css']
        }
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '/*! <%= pkg.name %>, <%= pkg.version %>: <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        linebreak: true
      },
      files: {
        src: [ 'dist/**' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('default', ['copy', 'cssmin', 'uglify', 'usebanner']);
};
