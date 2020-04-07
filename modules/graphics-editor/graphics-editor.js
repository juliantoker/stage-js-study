
import EDITOR_CONFIG from './src/config.js';
import createListenerNode from './src/user-input.js';

var GraphicsEditor = new function() {

      this.EDITOR_CONFIG = EDITOR_CONFIG;

      this.editorState = {

      }

      this.sceneNode = Stage.create();

      this.listenerNode = createListenerNode( {} , (listenerNode, EVENTS) => {
          listenerNode.on('TAB', () => {
              console.log("Inside the on tab event setup by user-input manager");
          });
      });
      
}

export default GraphicsEditor;