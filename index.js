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
  gridSize: 5,
  defaultGrid: {
    scaleX: 1.4000000000000004,
    scaleY: 0.7000000000000001,
    skewX: -1.6000000000000003,
    skewY: 0.20000000000000004
  }
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
  transformGrid(graphicsConfig.defaultGrid, grid);
  initializeKeyboardInput();
  initializePropertiesDebugger(stage, grid);
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

var transformGrid = function(transformValues, target = grid) {
  target.skew(transformValues.skewX, transformValues.skewY);
  target.scale(transformValues.scaleX,transformValues.scaleY);
}
var createGrid = function(stage, gridSize = graphicsConfig.gridSize) {
  const tiles = ['dark','blue','purple','red','orange','yellow','green'];
  var last = null;

  var j = 0, i = 0;
  var column = Stage.column().appendTo(stage).pin('align', 0.5).spacing(1);
  grid = column;
  for (j = 0; j < gridSize; j++) {
    var row = Stage.row().appendTo(column).spacing(1);
    for (i = 0; i < gridSize; i++) {
      let tile = tiles[Math.floor(Math.random() * tiles.length)];
      tile = 'green';
      var cell = Stage.image(tile).appendTo(row).pin('pivot', 0.5);
      cell.on(Mouse.CLICK, function(point) {
        console.log("clicking tile");
        if (this != last) {
          renderPlant(cell);
        }
        return true;
      });
    }
  }
}


// ---------------------------------------------------------------------------------------------------------------
//
// Plant Rendering Code
//
// ---------------------------------------------------------------------------------------------------------------

var renderPlant = function(inTile) {
    var plantNode = Stage.image('red').appendTo(inTile).pin('pivot',0.5);
    plantNode.scale(0.5);
    // var myPlant = new Plant(plantNode);
    
}

var Plant = new function(plantNode) {
  this.plantConfig = {
        name: 'default_name',
        species: 'blackLotus',
        maxHealth: 10,
        startingHealth: 10,
        growthStages: [{
              stageOrder: 0,
              name: 'seedling',
              growthTime: 5000,
              growthRequirement: {
                    water: 3
              },
              payout: {
                    points: 10
              }
        },{
              stageOrder: 1,
              name: 'sprout',
              growthTime: 8000,
              growthRequirement: {
                    water: 5
              },
              payout: {
                    points: 20
              }
        },{
              stageOrder: 2,
              name: 'flower',
              growthTime: 12000,
              growthRequirement: {
                    water: 9
              }, 
              payout: {
                    points: 30,
                    seed: 2
              }
        }]
  }
  this.growthStage = this.plantConfig.growthStages[0];
  this.growthRequirement = this.growthStage.growthRequirement;

  this.absorbLiquid = function(liquidPayload) {
        for (let [liquidComponent, liquidAmount] of Object.entries(object1)) {
              console.log(`${liquidComponent}: ${liquidAmount}`);
              if(this.growthRequirement[liquidComponent] != undefined) {
                    this.growthRequirement[key] -= liquidAmount;
                    console.log(`Plant ${this.plantConfig.species} absorbed ${liquidAmount} ${liquidComponent} \n requirement for ${liquidComponent} is now ${this.growthRequirement[key]}`);
              }
            }
  }

  this.checkRequirements = function() {

  }

  this.grow = function() {

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
  defaultIncrement : 0.1,
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

var initializePropertiesDebugger = function(stage, debugTargetNode = null) {
  var target = (debugTargetNode == null) ? stage.first() : debugTargetNode;
  console.log(`Initializing Properties Debugger... \n Stage: ${stage} \n Target Node: ${target}`);

  var debugColumn = Stage.column().appendTo(stage).pin('align', 0.0150).spacing(1);
  createDebugWidgetsFrom(debugWidgetConfig, debugColumn, stage);
}

var createDebugWidgetsFrom = function(config = debugWidgetConfig, inColumn = null, forStage = activeStage) {
  var column = (inColumn == null) ? forStage : inColumn;

  let payload = config.widgetPayload;
  payload.forEach(function(widgetInstance) {
    let info = widgetInstance.widgetInfo;
    renderDebugWidgetFrom(info, column, payload.indexOf(widgetInstance));
  });
}

var renderDebugWidgetFrom = function(widgetInfo, withParent = null, id = 0) {
  // Root node of widget
  var background = Stage.box();

  // Add sub-components to background node
  console.log(`Widget name is: ${widgetInfo.name}`);
  createDigitStringWith(id).appendTo(background);
  createDigitStringWith(id+1).appendTo(background);
  // If supplied with parent append to it and return true else return the newly created widget node
  if(withParent != null) {
    background.appendTo(withParent);
    return true;
  } else {
    console.log(`No parent specified... \n Returning widget visuals for ${widgetInfo.name}`);
    return background;
  }
}

var createDigitStringWith = function(value = 'DIGIT_STRING', parent = null) {

  console.log(`Creating digit string with value ${value}`);
  var number = Stage.string('digit').value(value.toString()                                                                             ).pin('align', 0.5);
  return number;
}

var initializeKeyboardInput = function() {
  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;
    console.log(`Keycode is ${e.keyCode}`);
    // Skew Commands
     
    /**
     * REFACTOR THIS TO WORK WITH SOME VARIABLE PROPERTY INPUT.
     * KEYS 1,2,3...,9 WILL CHANGE EDITED PROPERTY 
     * {  1: SCALE, 2: SKEW 3: OFFSET  }
     */
    const arrowPans = true;
    var val = arrowPans ? 'offset' : 'skew';
    if (e.keyCode == '38') {
        // up arrow
        console.log('up arrow');
        let valX = `${val}X`;
        let valY = `${val}Y`;
        console.log(`valX: ${valX} \n valY: ${valY}`);
        let newSkewX = grid.pin(valX);
        let newSkewY = grid.pin(valY) + debugWidgetConfig.defaultIncrement*200000;
        console.log(`skewx: ${newSkewX} \n skewY: ${newSkewY}`);
        // grid.skew(newSkewX,newSkewY);
        grid.pin({
          valX: newSkewX,
          valY: newSkewY
        });
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('down arrow');
        let newSkewX = grid.pin('skewX');
        let newSkewY = grid.pin('skewY') - debugWidgetConfig.defaultIncrement;
        grid.skew(newSkewX,newSkewY);
    }
    else if (e.keyCode == '37') {
      // left arrow
        console.log('left arrow');
        let newSkewX = grid.pin('skewX') - debugWidgetConfig.defaultIncrement;;
        let newSkewY = grid.pin('skewY');
        grid.skew(newSkewX,newSkewY);
    }
    else if (e.keyCode == '39') {
        // right arrow
        console.log('right arrow');
        let newSkewX = grid.pin('skewX') + debugWidgetConfig.defaultIncrement;;
        let newSkewY = grid.pin('skewY');
        grid.skew(newSkewX,newSkewY);
    }
    else if(e.keyCode ==  '49') {
      // 1
      var x = grid.pin('scaleX') + debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(x, grid.pin('scaleY'));
    }
    else if(e.keyCode ==  '81') {
      // Q
      var x = grid.pin('scaleX') - debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(x, grid.pin('scaleY'));
    }
    else if(e.keyCode ==  '50') {
      // 1
      var x = grid.pin('scaleY') + debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(grid.pin('scaleX'), x);
    }
    else if(e.keyCode ==  '87') {
      // Q
      var x = grid.pin('scaleY') - debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(grid.pin('scaleX'), x);
    }

  }
}


//
// Run Game
//

Stage(function(stage, display) {
  initializeGame(stage,display);    
});


