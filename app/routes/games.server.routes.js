'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	games = require('../../app/controllers/games.server.controller');

module.exports = function(app) {
	// Game Routes
	app.route('/games')
		.get(games.list)
		.post(users.requiresLogin, games.create);

	app.route('/games/:gameId')
		.get(games.read)
		.put(users.requiresLogin, games.update)
		.delete(users.requiresLogin, games.delete);

	// Finish by binding the game middleware
	app.param('gameId', games.gameByID);
};
