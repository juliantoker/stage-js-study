import FontString from './modules/font-string/font-string.js';
window.FontString = FontString;
// Stage element and display that carries the page's content
var activeStage;
var activeDisplay;
var grid;

// Global helper variables
var Math = Stage.Math, Mouse = Stage.Mouse;

var graphicsConfig = {
    viewboxWidth: 300,
    viewboxHeight: 300,
  };

var initializeStage = function(stage,display) {
  activeStage = stage;
  activeDisplay = display;
  stage.viewbox(graphicsConfig.viewboxWidth, graphicsConfig.viewboxHeight);
  makeFontString("WOAH!");
}

var makeFontString = function(text) {
    var box = Stage.image('dark').box().stretch().pin('align',0.5).appendTo(activeStage);
    console.log(box);
    var fontString = new FontString(text);
    fontString.sceneNode.appendTo(box).pin('align',0.5);
    fontString.sceneNode.on('click', (event) => {
        console.log('clicked fontstrign');
    });
    window.fontString = fontString;
}

var setDebugExports = () => {
    console.log('setting debug exports...\n graphicsEditor \n grid \n stage');
    window.stage = activeStage;
}
Stage(function(stage, display) {
  initializeStage(stage,display);
  setDebugExports();
});

