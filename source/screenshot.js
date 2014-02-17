var casper = require('casper').create();

casper.start();

var baseUrl = "http://localhost:4567";

var breakpoints = [400, 600, 900, 1200]; //Include here the breakpoints of your design

casper.open(baseUrl).then(function() {
    breakpoints.forEach(function(breakpoint) {
        casper.viewport(breakpoint, 800). capture('screenshots/' + breakpoint + '.png', {
            top: 0,
            left: 0,
            width: breakpoint,
            height: casper.evaluate(function(){ return document.body.scrollHeight; })
        });
    });
});

casper.run();
