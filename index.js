var Plant;
import('./modules/plant/plant.js').then((module) => {
  Plant = module.Plant;
});

import GraphicsEditor from './modules/graphics-editor/graphics-editor.js';

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
      // cell['cellName'] = `${i}${j}`
      cell.on('click', function(point) {
        // console.log(`Clicking tile  ${cell['cellName']}`);
        renderPlant(this);
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

var setDebugExports = () => {
    console.log('setting debug exports...\n graphicsEditor \n grid \n stage');
    window.graphicsEditor = GraphicsEditor;
    window.grid = grid;
    window.stage = activeStage;
}
//
// Run Game
//

Stage(function(stage, display) {
  initializeGame(stage,display);
  setDebugExports();    
});

window.setDebugExports = setDebugExports;
