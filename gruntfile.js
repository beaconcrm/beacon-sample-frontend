/* eslint-disable */

require('dotenv').config();

const fs = require('fs');

module.exports = (grunt) => {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ['css'],
        },
        files: {
          'public/css/styles.css': 'public/less/styles.less',
        },
        cleancss: true,
      },

    },

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

    aws_s3: {
      options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Use the variables
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // You can also use env variables
        region: 'eu-west-2',
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5, // 5 simultaneous downloads
        sslEnabled: true,
        access: 'public-read',
      },
      staging: {
        options: {
          bucket: 'beacon-app-assets-staging',
        },
        files: [{
          action: 'upload',
          expand: true,
          cwd: 'dist',
          src: ['**'],
          dest: 'admin/<%= deployConfig.assetsKey %>/',
          differential: true,
        }],
      },
      production: {
        options: {
          bucket: 'beacon-app-assets-production',
        },
        files: [{
          action: 'upload',
          expand: true,
          cwd: 'dist',
          src: ['**'],
          dest: 'admin/<%= deployConfig.assetsKey %>/',
          differential: true,
        }],
      },
    },

    watch: {
      styles: {
        files: ['public/less/**/*.less'], // which files to watch
        tasks: ['less', 'copy'],
        options: {
          nospawn: true,
          livereload: 8122,
        },
      },
    },

  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-aws-s3');


  grunt.registerTask('set_deploy_config', () => {
    const config = {
      assetsKey: Date.now(),
    };
    fs.writeFileSync(`${__dirname}/deploy.json`, JSON.stringify(config));
    grunt.config('deployConfig', config);
  });


  // Default task(s).
  grunt.registerTask('deploy_assets_staging', [
    'set_deploy_config',
    'copy',
    'aws_s3:staging',
  ]);
  grunt.registerTask('deploy_assets_production', [
    'set_deploy_config',
    'copy',
    'aws_s3:production',
  ]);


  grunt.registerTask('dev', ['less', 'copy', 'watch']);


};
