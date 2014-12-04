/**
 * This was basically the first version of the miner_helper. It goes to pick up any dropped energy, not ones from miner
 * This could be used to get energy from the battle field, if given some AI for running away
 * @param creep
 */
module.exports = function (creep) {
    var drop = creep.pos.findNearest(Game.DROPPED_ENERGY);
    if(drop !== null && (creep.energy < creep.energyCapacity)) {
        creep.moveTo(drop);
        creep.pickup(drop);
        return;
    }
    var target = creep.pos.findNearest(Game.MY_SPAWNS);
    creep.moveTo(target);
    creep.transferEnergy(target);
};
