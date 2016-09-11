module.exports = function(HTMLHint) {
    HTMLHint.addRule({
        id: 'attritbutes',
        description: 'attributes will be found and printed',
        init: function(parser, reporter){
            var self = this;
            parser.addListener('tagstart', function(event){
                var mapAttrs = parser.getMapAttrs(event.attrs);
                reporter.warn('Found attributes', event.line, event.col, self, event.raw);
            });
        }
    });
};

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        htmlhint: {
            html1: {
                options: {
                    'tag-pair': true,
                    'attributes' : true
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

