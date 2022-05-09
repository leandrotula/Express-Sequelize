const Sequelize = require('sequelize');
const author = require('../models').author;

module.exports = {


	create(req, res) {
		return author
			.findOrCreate({
				where: {
					username: req.params.username,
				},
				username: req.params.username,
				status: req.params.status
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},


	find(req, res) {
		return author
			.findOne({
				where: {
					username: req.params.username
				}
			})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},


	updateAuthor(req, res) {

		const responseUser = usuarios.findOne({
			where: {
				username: req.body.username
			}
		});

		Promise
			.all([responseUser])
			.then(responses => {
				return usuarios
					.update({
						username: req.body.new_username,
					}, {
						where: {
							username: req.body.username,
						},
					}
					)
					.then(usuarios => res.status(200).send(usuarios))
					.catch(error => res.status(400).send(error))
			})
	}
}