var utils = require('utils');
var logger = require('logger');
var base_creep = require('base_creep');

module.exports = function(creeps)
{
    var roles = { };

    //For each creep, check if they have a role. If they do, load and run it
    for(var name in creeps)
    {
        var creep = creeps[name];
        if(creep.memory.role === undefined || (creep.memory.active !== undefined && !creep.memory.active))
            continue;

        var role = creep.memory.role;

        if(roles[role] === undefined)
            roles[role] = require("roles_" + role);

        if (creep.spawning === true) {
            logger.debug('performRoles skipping creep ' + creep + ': spawning === true');
        }

        base_creep(creep);

        roles[role](creep);
    }
}
