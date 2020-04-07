/**
 * TAB/1,2,3,... will change the active widget and the arrow keys will increment the active widget val
 */
var EVENTS = {
    TAB: 9,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    key0: 48,
    key1: 49,
    key2: 50,
    key3: 51,
    key4: 52,
    key5: 53
}

var __EVENTS = [
    'leftArrow',
    'rightArrow',
    'upArrow',
    'downArrow',
    'tab',
    'key1',
    'key2',
    'key3',
    'key4',
    'key5'
];

var createListenerNode = function(config = null, callback = null) {
    var listenerNode = Stage.create();
    initializeKeyboardInput(listenerNode);
    callback(listenerNode,EVENTS);

    return listenerNode;
}

var initializeKeyboardInput = function(listenerNode) {
      document.onkeydown = checkKey;
    
      function checkKey(e) {
    
        e = e || window.event;
        console.log(`Keycode is ${e.keyCode}`);
        
        if(e.keyCode == EVENTS.TAB) {
            listenerNode.publish('TAB');
        }
      }
}

export default createListenerNode;