import basePlant from './plant-base-model.js';
var Plant = new function(plantNode) {
      this.plantNode = plantNode;
      this.plantConfig = Object.create(basePlant);
      this.growthStage = this.plantConfig.growthStages[0];
      this.growthRequirement = this.growthStage.growthRequirement;

      this.absorbLiquid = function(liquidPayload) {
            for (let [liquidComponent, liquidAmount] of Object.entries(object1)) {
                  console.log(`${liquidComponent}: ${liquidAmount}`);
                  if(this.growthRequirement[liquidComponent] != undefined) {
                        this.growthRequirement[key] -= liquidAmount;
                        console.log(`Plant ${this.plantConfig.species} absorbed ${liquidAmount} ${liquidComponent} \n requirement for ${liquidComponent} is now ${this.growthRequirement[key]}`);
                  }
                }
      }

      this.checkRequirements = function() {

      }

      this.grow = function() {

      }
}


export {Plant}
