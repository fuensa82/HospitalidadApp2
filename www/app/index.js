require.config({
    paths: {
        text:'../lib/text',
        router:'router',
        jquery: '../lib/jquery',
        underscore: '../lib/underscore',
        backbone: '../lib/backbone',
        jquerymobile:'../lib/jquery.mobile-1.4.5'
    },
    shim:{
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: "Backbone"
        },
        'jquerymobile':{
            deps: ['jquery'],
            exports: "jquerymobile"
        },
        'underscore':{
            exports:'_'
        },
        'jquery':{
            exports:'$'
        }
    }
});
require([
    'router','jquery'
    ], function (Router,$) {

        $('body').on("pagehide",'div[data-role="page"]',function(event){
            console.log("borrando pagina ... ");
            $(event.currentTarget).remove();
        });
        console.log("Entrando");
        window.app = new Router();
        Backbone.history.start();
    }
);
//document.addEventListener('deviceready', onDeviceReady, false);

