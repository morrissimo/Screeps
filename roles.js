module.exports = function()
{
    //My list of creeps
    return {
        //'harvester': [Game.MOVE, Game.WORK, Game.CARRY, Game.WORK, Game.MOVE],
        'scavenger': [Game.CARRY, Game.MOVE],
        'builder': [Game.WORK, Game.CARRY, Game.MOVE],
        //'repairer': [Game.WORK,Game.WORK,Game.WORK,Game.CARRY,Game.MOVE],
        'melee': [Game.TOUGH, Game.MOVE, Game.ATTACK],
        'ranged': [Game.RANGED_ATTACK, Game.MOVE],
        'healer': [Game.HEAL, Game.MOVE],
        'miner': [Game.WORK, Game.WORK, Game.CARRY, Game.MOVE],
        'miner_helper': [Game.CARRY, Game.MOVE]
    };

}
