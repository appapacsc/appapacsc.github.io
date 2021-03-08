define(["/etc/designs/wbc/clientlib-all/assets/js/components/tools-calculators/tools-calculators-base.min.js", "/etc/designs/wbc/clientlib-all/assets/js/components/cafe-core/cafe-core.min.js"],
//define(["components/tools-calculators/tools-calculators-base.min", "components/cafe-core/cafe-core.min"],
    function(calcBase, formcore) {
        var calcBase;
        var formcore;
        var selectorTool = {};
        var config = {};
        $(document).on('click', '.js-selected', function() {
            console.log('THis is hte result array =======> ' , formcore.getResult())
        })
        
        var renderCalcResult = function() {
            
        }

        selectorTool.init = function(options) {
            config = $.extend(config, options);
            calcBase = new calcBase(config);
            calcBase.init().done(function(result) {
                config = $.extend(config, result);
                formcore = new formcore(config);
                //This function is only needed for selector tools.
                formcore.getSelectorJson()
                console.log('This is the final config ==========> ' , config)
                // Use this 
                $('.js-error-msg').html("")
                $('.js-error-component').slideUp()
            });
        }
        return selectorTool
    })