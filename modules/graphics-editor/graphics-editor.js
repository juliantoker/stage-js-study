
import EDITOR_CONFIG from './src/config.js';
import createListenerNode from './src/user-input.js';

var GraphicsEditor = function(node) {
    
    this.EDITOR_CONFIG = EDITOR_CONFIG;

    this.editorState = {
        activeWidget: EDITOR_CONFIG.widgetPayload.skew
    }

    this.sceneNode = Stage.create();
    this.editableNode = node;

    this.listenerNode = createListenerNode( {} , (listenerNode, EVENTS) => {
    listenerNode.on( 'RIGHT_ARROW', () => {incrementActiveWidgetProperty(this,'x')} );
    // listenerNode.on( 'LEFT_ARROW', incrementActiveWidgetProperty('x',-1) );
    // listenerNode.on( 'UP_ARROW', incrementActiveWidgetProperty('y') );
    // listenerNode.on( 'DOWN_ARROW', incrementActiveWidgetProperty('y',-1) );
        
    });
    
      
    

    this.setActiveNode = function(node) {
        this.editableNode = node;
    }

    function transformNode(transform) {
        if(this.editableNode == null) { console.log('Cannot edit node... Node null'); return;}

        this.editableNode.pin(transform);
    }

    function incrementNodeProperty(propertyName, amt) {
        var transform = {

        }
    }

    function incrementActiveWidgetProperty(self, component = 'x', dir = 1) {
        console.log(self);
        var transform = {};
        let widget = self.editorState.activeWidget;
        let fieldName = widget.fieldNames[component];

        let inc = widget.customIncrement != null ? widget.customIncrement : EDITOR_CONFIG.defaultIncrement;
        transform[fieldName] = self.editableNode.pin(fieldName) + (dir * inc);
        self.editableNode.pin(transform);

        console.log(`increment transform is: ${transform}`);
    }

    return this;

      
}

export default GraphicsEditor;