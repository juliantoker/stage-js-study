var basePlant = {
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

export default basePlant;