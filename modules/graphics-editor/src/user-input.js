/**
 * TAB/1,2,3,... will change the active widget and the arrow keys will increment the active widget val
 */
var EVENTS = {
    TAB: 9,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    KEY_0: 48,
    KEY_1: 49,
    KEY_2: 50,
    KEY_3: 51,
    KEY_4: 52,
    KEY_5: 53
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

var createListenerNode = function(config = {}, callback = null) {
    var listenerNode = Stage.create();
    initializeKeyboardInput(listenerNode,EVENTS);
    if(callback != null) {
        callback(listenerNode,EVENTS);
    }
    

    return listenerNode;
}

var initializeKeyboardInput = function(listenerNode, events) {
      document.onkeydown = checkKey;
    
      function checkKey(e) {
    
        e = e || window.event;
        console.log(`Keycode is ${e.keyCode}`);
        
        for(var eventName in events) {
            if(e.keyCode == events[eventName]) {
                listenerNode.publish(eventName);
            }
        }
      }
}

export default createListenerNode;