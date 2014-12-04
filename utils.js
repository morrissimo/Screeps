var _ = require('lodash');
var logger = require('logger');

module.exports = {

    xClosestToSpawn: function (spawn, type) {
        return spawn.pos.findNearest(type, {ignoreCreeps: true});
    },

    sourceClosestToSpawn: function (spawn) {
        return this.xClosestToSpawn(spawn, Game.SOURCES);
    },

    dropClosestToSpawn: function (spawn) {
        return this.xClosestToSpawn(spawn, Game.DROPPED_ENERGY);
    },

    hostileClosestToSpawn: function (spawn) {
        return this.xClosestToSpawn(spawn, Game.HOSTILE_CREEPS);
    },

    moveToPreferRamparts: function(creep, toPos) {
        var err = creep.moveTo(toPos, { withinRampartsOnly: true });
        if (err === Game.ERR_NO_PATH) {
            err = creep.moveTo(toPos, { withinRampartsOnly: false });
        }
        if (err !== Game.OK) {
            logger.error(creep + ' - moveToPreferRamparts couldnt path to ' + toPos + ' - err=' + err);
        }
    }    

}
