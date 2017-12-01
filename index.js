"use strict";

window.addEventListener("load", function() {
    let timer = 2000 + Math.random()*3000;
    setTimeout(function() {
        let start = Date.now();
        document.body.style.backgroundColor="grey";
        document.body.addEventListener("click", function() {
            let end = Date.now();
            console.log((end-start)/1000);
        }, false);
    },timer);
});