var _ = require('lodash');
var utils = require('utils');
var logger = require('logger');

module.exports = function()
{
    if(Memory.sources === undefined) {
        Memory.sources = { };
    }
    
    _(Game.creeps).forEach(function(creep) {
        logger.debug(creep + ' found; spawning=' + JSON.stringify(creep.spawning) + '; memory=' + JSON.stringify(creep.memory));
    });
}
