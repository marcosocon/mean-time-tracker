//routes.js
var Reports  = require('./models/reports');

	module.exports = function(app){
		//api routes
		app.get('/api/reports', function(req ,res){
			Report.find(function(err, reports){
					if (err) {
						res.send(err);
					}
					res.json(reports);
			});
		});

		//route to handle post:create
		//route to handle delete:delete
		app.get('*', function(req, res){
			res.sendfile('./public/views/index.html');
		});
	};
