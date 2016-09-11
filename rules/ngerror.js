var HTMLHint  = require('htmlhint').HTMLHint;


module.exports = {
    init: initRule 
};


function initRule () {
    HTMLHint.addRule({
        id: 'ngerror',
        description: 'finds and reports all attributes of type `ngerror` with non-even numbers of single quotes.',
        init: function(parser, reporter){
            var self = this;
            parser.addListener('tagstart', function(event){
                var mapAttrs = parser.getMapAttrs(event.attrs);
                if ( mapAttrs.hasOwnProperty('ngerror') && ( mapAttrs.ngerror.match(/'/g).length % 2 ) !== 0 ) {
                        reporter.info('You must close and open all occurences of single quotes', event.line, event.col, self, event.raw);
                }    
            });
        }
    });    
}

