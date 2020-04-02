var Plant = new function(plantNode) {
      this.plantNode = plantNode;
      this.plantConfig = {
            name: 'default_name',
            species: 'blackLotus',
            maxHealth: 10,
            startingHealth: 10,
            growthStages: [{
                  stageOrder: 0,
                  name: 'seedling',
                  growthTime: 5000,
                  growthRequirement: {
                        water: 3
                  },
                  payout: {
                        points: 10
                  }
            },{
                  stageOrder: 1,
                  name: 'sprout',
                  growthTime: 8000,
                  growthRequirement: {
                        water: 5
                  },
                  payout: {
                        points: 20
                  }
            },{
                  stageOrder: 2,
                  name: 'flower',
                  growthTime: 12000,
                  growthRequirement: {
                        water: 9
                  }, 
                  payout: {
                        points: 30,
                        seed: 2
                  }
            }]
      }
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

exports.Plant = Plant;
// export {Plant}