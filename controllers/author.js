const author = require('../models').author;

module.exports = {

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