// Controllers
const authorsControllers = require('../controllers/author');

module.exports = (app) => {

	app.get('/api', (req, res) => res.status(200).send({
		message: 'Clase 5 Icaro',
	}));

	app.get('/api/authors/find/id/:id', authorsControllers.find);

};