module.exports = function(creep)
{
        var moveOpts = {withinRampartsOnly: true};
        var findOpts = {ignoreCreeps: true};
	var closestEnemy = creep.pos.findNearest(Game.HOSTILE_CREEPS);

	if(closestEnemy !== null) {
            creep.moveTo(closestEnemy, moveOpts);
            creep.rangedAttack(closestEnemy);
	} else {
            var nearestSpawn = creep.pos.findNearest(Game.MY_SPAWNS);
            creep.moveTo(nearestSpawn, moveOpts);
        }
}
