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

var initializeStage = function (stage, display) {
    console.log('initializing stage...');
    activeStage = stage;
    activeDisplay = display;
    stage.viewbox(graphicsConfig.viewboxWidth, graphicsConfig.viewboxHeight);
}

var makeFontString = function (text) {
    var box = Stage.image('dark').box().stretch().pin('align', 0.5).appendTo(activeStage);
    var fontString = new FontString(text);
    fontString.sceneNode.appendTo(box).pin('align', 0.5);
    fontString.sceneNode.on('click', (event) => {
        console.log('clicked fontstrign');
    });
    window.box = box;
    window.fontString = fontString;
}

var setDebugExports = () => {
    console.log('setting debug exports...\n graphicsEditor \n grid \n stage');
    window.stage = activeStage;
    window.transformNode = transformNode;
    window.makeSquare = makeSquare;
    window.newTransform = newTransform;
    window.tests = {
        singleParent: setupSingleParentManyChildrenTest
    }
}
Stage(function (stage, display) {
    initializeStage(stage, display);
    setDebugExports();
});

// Debug Code

var transformNode = (node, targetTransform) => {
    let defaultTransform = {
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        skewY: 0,
        rotation: 0
    };
    let transform = targetTransform ? targetTransform : defaultTransform;
    node.pin({
        scaleX: transform.scaleX,
        scaleY: transform.scaleY,
        skewX: transform.skewX,
        skewY: transform.skewY,
        rotation: transform.rotation
    });
}

var makeSquare = () => {
    const tiles = ['dark', 'blue', 'purple', 'red', 'orange', 'yellow', 'green'];
    const i = Math.floor(Math.random() * tiles.length);
    let square = Stage.image(tiles[i]);
    return square;
}

var newTransform = () => {
    return {
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        skewY: 0,
        rotation: 0
    };
}

var setupSingleParentManyChildrenTest = ( numBoxes = 2 ) => {
    let parent = makeSquare();
    let child = makeSquare().appendTo(parent);
    parent.appendTo(activeStage);
    return parent;
}


