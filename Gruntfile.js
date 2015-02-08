module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        traceur: {
            options: {
                experimental: true
            },
            modules: {
                options: {
                    moduleNaming: {
                        stripPrefix: "src/es5"
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src/es6',
                    src: ['modules/*.js'],
                    dest: 'src/es5'
                }]
            },
            custom: {
                options: {
                    moduleNames: false
                },
                files: [{
                    expand: true,
                    cwd: 'src/es6',
                    src: ['*.js'],
                    dest: 'src/es5'
                }]
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            watch: {
                autoWatch: false,
                background: true,
                singleRun: false
            },
            single: {
                singleRun: true
            }
        },
        watch: {
            options: {
                interrupt: true
            },
            es6: {
                files: ['src/es6/**/*.js'],
                tasks: ['traceur', 'karma:watch:run']
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['traceur', 'karma:single']);

};
