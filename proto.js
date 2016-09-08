"use strict";
(function(window,document){
    function MeuProto(){
        if(!(this instanceof MeuProto)){return new MeuProto();}
    };
    MeuProto.prototype = {
       alert:function(){
            window.alert('Esta função é do prototype');
        }
    };
    MeuProto.__proto__ = {
         alert:function(){
            window.alert("Esta função é do __proto__");
        }
    };
    window.MeuProto = MeuProto;
})(window,document)
