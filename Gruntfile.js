

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        htmlhint: {
            html1: {
                options: {
                    'ngerror' : true,
                },
                src: ['index.html']
            }
        }
    });


    // Load htmlhint plugin.
    grunt.loadNpmTasks('grunt-htmlhint');

    // Register htmlhint as a default task
    grunt.registerTask('default', ['htmlhint']);

    
};

