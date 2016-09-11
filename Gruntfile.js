module.exports = function(grunt) {
  'user strict';

  //before task loader init new rule 
   require('./rules/ngerror').init();

    // Load htmlhint plugin. But actually you can also create your wrapper/ withour installation -- 
    //please look the code 
    //subl node_modules/grunt-htmlhint/tasks/htmlhint.js 
    
    /*
        register task and call 
        var HTMLHint = require("htmlhint").HTMLHint;

        grunt.registerMultiTask('htmlhint', 'Validate html files with htmlhint.', function() {
    */

    grunt.loadNpmTasks('grunt-htmlhint');

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



    // Register htmlhint as a default task
    grunt.registerTask('default', ['htmlhint']);

    
};

