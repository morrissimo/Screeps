module.exports = function(type, qued)
{
	if(qued == undefined)
		qued = false;

	//Get the current room, then find all creeps in that room by their role
	var room = Game.getRoom('1-1');

	var count = room.find(Game.MY_CREEPS, {
		filter: function(creep)
		{
			if(creep.memory.role == type)
				return true;

			return false;
		}
	}).length;

	if(qued)
	{
		if(Game.spawns.Spawn1.spawning !== null
			&& Game.spawns.Spawn1.spawning !== undefined
			&& Memory.creeps[Game.spawns.Spawn1.spawning.name].role == type) {
			count++;
		}

		count += Memory.spawnQue.filter(function(qued)
		{
			return qued == type;
		}).length;
	}

	return count;
};