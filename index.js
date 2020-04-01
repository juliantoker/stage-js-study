
// Stage element and display that carries the page's content
var activeStage;
var activeDisplay;
var grid;

// Global helper variables
var Math = Stage.Math, Mouse = Stage.Mouse;

//  Graphics config object
var graphicsConfig = {
  viewboxWidth: 300,
  viewboxHeight: 300,
  gridSize: 9
};

var defaultStageTransform = {
  skewX: 0,
  skewY: 0,
  rotation: 0
};

var currentStageTransform = defaultStageTransform;

// Function passed into the stage-js initializer at the bottom of this file
var initializeGame = function(stage, display) {
  initializeStage(stage, display);
  loadImageAssets();
  createGrid(stage);
  initializeKeyboardInput();
  createDigitDisplay(stage);
}

var initializeStage = function(stage,display) {
  activeStage = stage;
  activeDisplay = display;
  stage.viewbox(graphicsConfig.viewboxWidth, graphicsConfig.viewboxHeight);
}

var loadImageAssets = function() {
  Stage({
    image : 'assets/images/tileGrass.png',
    textures : {
      grass : { x : 0, y : 0, width : 65, height : 65 }
    }
  });
}


var createGrid = function(stage, gridSize = graphicsConfig.gridSize) {
  var last = null;

  var j = 0, i = 0;
  var column = Stage.column().appendTo(stage).pin('align', 0.5).spacing(1);
  grid = column;
  for (j = 0; j < gridSize; j++) {
    var row = Stage.row().appendTo(column).spacing(1);
    for (i = 0; i < gridSize; i++) {
      var cell = Stage.image('dark').appendTo(row).pin('pivot', 0.5);
      cell.on(Mouse.MOVE, function(point) {
        if (this != last) {
          last = this;
          column.tween(Math.random(2000, 5000)).pin({
            'skewX' : Math.random(0, 0.4),
            'skewY' : Math.random(0, 0.4)
          });
        }
        return true;
      });
    }
  }
}


// ---------------------------------------------------------------------------------------------------------------
//
// Debug Code
//
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------
// Debug Config
// ---------------------------------------------------------------------------------------------------------------


// Keyboard Input Config
// ---------------------------------------------------------------------------------------------------------------
var debugConfig = {
  debugKeyMap: {
    
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Stage.js Node Properties Debugger
// ---------------------------------------------------------------------------------------------------------------

var DebugWidgetTemplates = {
  SINGLE: 'single',
  XY: 'xy'
}

var debugWidgetConfig = {
  defaultIncrement : 0.01,
  widgetPayload: [
    { 
      widgetInfo : {
        name: 'skew',
        templateType: DebugWidgetTemplates.XY,
        customIncrement: null,
        xyFieldNames: {
          x: 'skewX',
          y: 'skewY'
        }
      }
    }
  ]
}

var initializePropertiesDebugger = function(stage, debugTargetNode) {
  var debugColumn = Stage.column().appendTo(stage).pin('align', 0.0).spacing(1);
  createDebugWidgetsFrom(config = debugWidgetConfig, inColumn = debugColumn, forStage = stage);
}

var createDebugWidgetsFrom = function(config = debugWidgetConfig, inColumn = null, forStage = activeStage) {
  inColumn = (inColumn == null) ? forStage : inColumn;

  let payload = config.widgetPayload;
  payload.forEach(function(widgetInstance) {
    let info = widgetInstance.widgetInfo;
  });
}

var renderDebugWidgetFrom = function(widgetInfo, withParent = null) {
  var makeTuningKnob
  let parent = (withParent == null) ? activeStage : withParent;
  var background = Stage.box();
}

var createDigitStringWith = function(value = 'DIGIT_STRING', parent = null) {
  var number = Stage.string('digit').value('0123456789').pin('align', 0.5).appendTo(parent);
}

var initializeKeyboardInput = function() {
  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;
    console.log(`Keycode is ${e.keyCode}`);
    if (e.keyCode == '38') {
        // up arrow
        console.log('up arrow');
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('down arrow');
    }
    else if (e.keyCode == '37') {
      // left arrow
      console.log('left arrow');
    }
    else if (e.keyCode == '39') {
      // right arrow
      console.log('right arrow');
    }

  }
}


//
// Run Game
//

Stage(function(stage, display) {
  initializeGame(stage,display);    
});