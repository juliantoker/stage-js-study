
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
    listenerNode.on( 'LEFT_ARROW', () => {incrementActiveWidgetProperty(this,'x',-1)} );
    listenerNode.on( 'UP_ARROW', () => {incrementActiveWidgetProperty(this,'y')} );
    listenerNode.on( 'DOWN_ARROW', () => {incrementActiveWidgetProperty(this,'y',-1)} );
    listenerNode.on( 'KEY_1', () => {setActiveWidget(this,EDITOR_CONFIG.widgetPayload.skew)} );
    listenerNode.on( 'KEY_2', () => {setActiveWidget(this,EDITOR_CONFIG.widgetPayload.scale)} );
    listenerNode.on( 'KEY_3', () => {setActiveWidget(this,EDITOR_CONFIG.widgetPayload.rotation)} );
    listenerNode.on( 'KEY_4', () => {setActiveWidget(this,EDITOR_CONFIG.widgetPayload.handle)} );
    listenerNode.on( 'KEY_5', () => {setActiveWidget(this,EDITOR_CONFIG.widgetPayload.align)} );
    listenerNode.on( 'KEY_6', () => {setActiveWidget(this,EDITOR_CONFIG.widgetPayload.pivot)} );
    });
    
    this.setActiveNode = function(node) {
        this.editableNode = node;
    }

    function setActiveWidget(self, widget) {
        self.editorState.activeWidget = widget;
        console.log(`Setting active widget to: \n ${widget.name}`)
    }

    function incrementActiveWidgetProperty(self, component = 'x', dir = 1) {
        console.log(self);
        var transform = {};
        let widget = self.editorState.activeWidget;
        let fieldName = widget.fieldNames[component];

        let inc = widget.customIncrement != null ? widget.customIncrement : EDITOR_CONFIG.defaultIncrement;
        console.log(`widget ${fieldName}'s increment is: ${dir * inc}`);
        transform[fieldName] = self.editableNode.pin(fieldName) + (dir * inc);
        self.editableNode.pin(transform);

    }

    return this;

      
}

export default GraphicsEditor;