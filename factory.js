var countType = require('countType');
var spawner = require('spawner');
var utils = require('utils');
var logger = require('logger');
var _ = require('lodash');

module.exports = function()
{
	//These creeps will be generated in this order, and if one of them dies or expires, they'll be rebuilt
	/*
        // v2
        var requiredScreeps = [
            'harvester',
            'harvester',
            'archer',
            'archer',
            //'guard',
            //'healer',
            //'guard',
            'builder',
            //'guard',
            'harvester',
            'archer',
            'healer',
            'scavenger',
            //'archer',
            'guard',
            'harvester',
            'guard',
            'healer'
	]
        */
        // v3
        var requiredScreeps = [
            'miner', 'miner_helper',
            'ranged', 'healer',
            'scavenger',
            'miner', 'miner_helper',
            'ranged', 'healer',
            'scavenger',
            'builder',
            'miner', 'miner_helper'
        ]

	var gatheredScreeps = { };
	for(var index in requiredScreeps)
	{
            if(_.isEmpty(Game.spawns)) {
                logger.error('factory.js aborting: no spawns');
                return;
            }
            // TODO
            var spawn = undefined;
            _.forEach(Game.spawns, function(s) {
                //if(spawn === undefined && s && s.spawning !== null) {
                //    spawn = s;
                //}
                spawn = s;
            });
            if(spawn === undefined) {
                logger.warn('factory.js aborting: no available spawns (eg, all spawns are spawning something)');
                return;
            }

            var type = requiredScreeps[index];
            if(gatheredScreeps[type] === undefined)
                gatheredScreeps[type] = 0;

            var neededToSkip = gatheredScreeps[type] + 1;

            if(neededToSkip > countType(type))
            {
                spawner.spawn(type);
                break;
            }

            gatheredScreeps[type]++;
	}
}
