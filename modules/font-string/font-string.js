import { threadId } from "worker_threads";

var FontString = function(displayString) {
    this.displayString = displayString;
    this.sceneNode = Stage.image();

    this.setText = function(newText) {

    }

    function renderText() {
        this.sceneNode.image(Stage.canvas(function(ctx) {
            ctx.font = "30px Arial";
            ctx.fillText("Hello World", 10, 50); 
        }));
    }
    return this;
}