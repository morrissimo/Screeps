var performRoles = require('performRoles');
var spawner = require('spawner');
var countType = require('countType');
var factory = require('factory');

factory.init();
factory.run();

spawner.spawnNextInQue();

performRoles(Game.creeps);