var _ = require('lodash');
var _start = _.now();

var utils = require('utils');
var logger = require('logger');
var performRoles = require('performRoles');
var spawner = require('spawner');
var countType = require('countType');
var factory = require('factory');
var mem_sync = require('mem_sync');

Memory.settings = {
    log_level: logger.INFO,
    show_turn_timing: false,
};

mem_sync();
factory();
performRoles(Game.creeps);

var turn_elapsed = _.now() - _start;
if(Memory.settings.show_turn_timing || turn_elapsed >= 500)
    logger.log('Turn elapsed: ' + turn_elapsed + ' ms');
