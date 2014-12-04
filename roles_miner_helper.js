var logger = require('logger');

module.exports = function(creep)
{
	//If this helper isn't assigned to a miner, find one and assign him to it. If it is assigned to a miner,
	//then find that miner by his id
	if(creep.memory.miner === undefined)
	{
            var miner = creep.pos.findNearest(Game.MY_CREEPS, {
                filter: function(miner)
                {
                    if(miner.memory.role == 'miner' && (miner.memory.helpers === undefined || miner.memory.helpers.length < 2))
                        return true;

                    return false;
                }
            });

            if(!miner) {
                logger.warn(creep + ' - no miner found!');
                return;
            }

            creep.memory.miner = miner.id;
            if(miner.memory.helpers === undefined)
                miner.memory.helpers = [ ];
            miner.memory.helpers.push(creep.id);
	}
	else
	{
            var miner = creep.room.find(Game.MY_CREEPS, {
                filter: function(miner)
                {
                    if(miner.id == creep.memory.miner)
                        return true;

                    return false;
                }
            });
	}

	//If we have too much energy, go drop it off. Otherwise, move to assigned miner and pick up any dropped energy
	if(creep.energy < creep.energyCapacity) {
            creep.moveTo(miner[0]);

            if(creep.pos.isNearTo(miner[0]))
            {
                var energy = creep.pos.findInRange(Game.DROPPED_ENERGY, 1)[0];
            }
            creep.pickup(energy);
	}
	else {
            var target = creep.pos.findNearest(Game.MY_SPAWNS);

            creep.moveTo(target);
            creep.transferEnergy(target);
	}
};
