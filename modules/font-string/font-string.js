import fontConfig from './src/font-string-config.js';

var FontString = function(displayString) {
    this.fc = Object.create(fontConfig); //Why create an instanced version of the global config?
    this.displayString = displayString;
    this.sceneNode = Stage.image().pin({'align':0.5});

    this.setText = function(newText) {
        this.displayString = newText;
        renderText(this.sceneNode,this.displayString, this.fc);
    }

    function renderText(sceneNode, textString = 'DEFAULT_TEXT', fc = {}) {
        sceneNode.image(Stage.canvas(function(ctx) {
            //this = image node (stage.js object and not native canvas)
            
            this.size( fc.canvasSize.x , fc.canvasSize.y , fc.canvasSize.res );
            ctx.font = `${fc.fontSize} ${fc.fontUnits} ${fc.fontFamily}`;
            ctx.textAlign = fc.textAlign;
            ctx.textBaseline = fc.textBaseline;
            let maxWidth = fc.canvasSize.x;
            ctx.fillText(textString, fc.canvasSize.x, fc.canvasSize.y, maxWidth); 
            
        }));
    }
    renderText(this.sceneNode,this.displayString,this.fc);
    return this;
}

export default FontString;