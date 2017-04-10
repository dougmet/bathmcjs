
(function(window){
    'use strict';
    function Bathmc() {
        // Core controller
        // This class creates baths and runs the show
        var Bathmc = {
            defaults: {
              doug: 1,
              ashton: 2
            }
        }

        return Bathmc;
    };

    //define globally if it doesn't already exist
    if(typeof(window.Bathmc) === 'undefined'){
        window.Bathmc = Bathmc();
    }
    else{
        console.log("Bathmc already defined.");
    }
})(window);
