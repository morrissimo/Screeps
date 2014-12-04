/**
 * Because shit happens
 * @param creep
 */
module.exports = function(creep)
{
    var moveOpts = {};
    var findOpts = {ignoreCreeps: true};
    var needsHealing = [ ];

    if(creep.energy < 20) {
        var spawn = creep.pos.findNearest(Game.MY_SPAWNS, findOpts);
        var err = creep.moveTo(spawn);
        if (!err)
            spawn.transferEnergy(creep);
    }

    //Find my creeps that are hurt. If they're hurt, heal them.
    //If there aren't any hurt, we're going to try and get the healers
    //to tick near the guards, so that they're close by when the battle starts
    for(var name in Game.creeps)
    {
        var targetCreep = Game.creeps[name];
        if(!targetCreep.my)
                continue;

        if(targetCreep.hits < targetCreep.hitsMax)
                needsHealing.push(targetCreep);
    }

    if(needsHealing.length)
    {
        creep.moveTo(needsHealing[0]);
        creep.heal(needsHealing[0]);
    }
    else
    {
        var guard = null;
        for(var name in Game.creeps)
        {
            var creep = Game.creeps[name];
            if(creep.my && creep.memory.role == 'guard')
            {
                guard = creep;
                break;
            }
        }

        if(guard !== null)
            creep.moveTo(guard);
        else
            creep.moveTo(Game.spawns.Spawn1);
    }
}
