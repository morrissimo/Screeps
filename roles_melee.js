/**
 * The Guard hasn't been improved in a while, I've mostly just moved on to archers for now. I'll come back and
 * work on this one later
 * @param creep
 */
module.exports = function(creep) {
    var utils = require('utils');
    var moveOpts = {};
    var findOpts = {ignoreCreeps: true};
    var nearestSpawn = creep.pos.findNearest(Game.MY_SPAWNS, findOpts);
    var target = utils.hostileClosestToSpawn(nearestSpawn);
    
    if (target !== null) {
        creep.moveTo(target, moveOpts);
        creep.attack(target);
    } else {
        creep.moveTo(nearestSpawn, moveOpts);
    }
}
