var _ = require('lodash');

var partsRequiredForRole = {
    'miner': [Game.WORK],
    'miner_helper': [Game.CARRY, Game.MOVE],
    'scavenger': [Game.CARRY, Game.MOVE],
    'builder': [Game.WORK, Game.CARRY, Game.MOVE],
    'melee': [Game.ATTACK],
    'ranged': [Game.RANGED_ATTACK],
    'healer': [Game.HEAL]
}


function canWork(creep) {
    _.filter(creep.body, function(part) {
        return true;
    });
    return false;
}

function hasRolePartDamage(creep) {
    return false;
}

function shouldFleeEnemy(creep) {
    return false;
}


module.exports = function(creep) {

    if(creep.memory && creep.memory.id === undefined) {
        creep.memory.id = creep.id;
    }

}
