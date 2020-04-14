
module.exports = (grunt) => {

  // Project configuration.
  grunt.initConfig({

    // copy the vendors folder over to the dist folder
    copy: {
      assets: {
        expand: true,
        cwd: 'public/',
        src: [
          'vendors/**',
          'css/**',
          'img/**',
          'fonts/**',
        ],
        dest: 'dist/',
      },
    },

  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

};
