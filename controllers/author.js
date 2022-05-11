const author = require('../models').author;

module.exports = {

	create(req, res) {
		return author
			.create ({
				 name: req.body.name,
				 lastname: req.body.lastname,
				 id:req.body.id
			})
			.then(createdAuthor => res.status(201).send(createdAuthor))
			.catch(error => res.status(400).send(error))
	 },

	find(req, res) {
		return author
			.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(author => res.status(200).send(author))
			.catch(error => res.status(400).send(error))
	}
}