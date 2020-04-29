var FontString = function(displayString) {
    this.displayString = displayString;
    this.sceneNode = Stage.image().pin({'align':0.5});

    this.setText = function(newText) {

    }

    function renderText(sceneNode) {
        sceneNode.image(Stage.canvas(function(ctx) {
            // ctx.scale(4, 4);
            this.size(50,20,4);
            console.log(this);
            ctx.font = "30px Arial";
            ctx.fillText("Hello World", 10, 50); 
            console.log(this.sceneNode);
        }));
    }
    renderText(this.sceneNode);
    return this;
}

export default FontString;