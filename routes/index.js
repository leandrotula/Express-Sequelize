// Controllers
const authorsControllers = require('../controllers/author');

module.exports = (app) => {

	app.get('/api', (req, res) => res.status(200).send({
		message: 'Clase 5 Icaro',
	}));

	app.post('/api/authors/create/name/:name/lastname/:lastname', authorsControllers.create);
	app.get('/api/authors/find/name/:name', authorsControllers.find);
	app.post('/api/authors/updateAuthor', authorsControllers.updateAuthor);

};