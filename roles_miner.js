var _ = require('lodash');
var logger = require('logger');

module.exports = function(creep)
{

    var miner_helpers = creep.pos.findInRange(Game.MY_CREEPS, 1, {
        filter: function(other_creep) {
            return other_creep.memory.role === 'miner_helper' ? true : false;
        }
    });
    if (miner_helpers.length) {
        var miner_helper = miner_helpers[0];
        var err = creep.transferEnergy(miner_helper);
        if (err !== Game.OK) {
            logger.error(creep + ' - Error transferring energy to miner helper ' + miner_helper + ': ' + err);
        }
    }

    if(!creep.spawning && creep.memory && creep.memory.source === undefined) {
        //Basically, each miner can empty a whole source by themselves. Also, since they're slow, we don't have them
        //moving away from the source when it's empty, it'd regenerate before they got to another one.
        //For this, we assign one miner to one source, and they stay with it
        var source = creep.pos.findNearest(Game.SOURCES, {
            filter: function(source)
            {
                if (Memory.sources[source.id] === undefined ||
                        Memory.sources[source.id].miner === undefined ||
                        Memory.sources[source.id].miner === creep.id) {
                    return true;
                }
                return false;
            }
        });
        
        // if we still don't have a source, bail
        if (source === undefined || source === null) {
            logger.error(creep + ' - Error finding nearest source: source=' + source);
            return;
        }

        if(Memory.sources[source.id] === undefined) {
            Memory.sources[source.id] = {
                id: source.id,
                pos: source.pos
            };
        }

        // ...otherwise, claim it for our very own
        if(Memory.sources[source.id].miner === undefined) {
            Memory.sources[source.id].miner = creep.id;
            creep.memory.source = source.id;
            logger.info(creep + ' - claimed source ' + source.id);
        }
    }

    creep.moveTo(source);
    creep.harvest(source);
};
