/**
 * These are simple creatures, they just find an active source and harvest it
 * @param creep
 */
module.exports = function (creep) {
    var utils = require('utils');
    var moveOpts = {};
    var findOpts = {ignoreCreeps: true};
    var nearestSpawn = creep.pos.findNearest(Game.MY_SPAWNS, findOpts);
    if(creep.energy < creep.energyCapacity) {
        //var sources = creep.pos.findNearest(Game.SOURCES);
        var nearestSource = utils.sourceClosestToSpawn(nearestSpawn);
        creep.moveTo(nearestSource, moveOpts);
        creep.harvest(nearestSource);
    } else {
        creep.moveTo(nearestSpawn, moveOpts);
        creep.transferEnergy(nearestSpawn);
    }
}
