var plugin = {},
    emitter = module.parent.require('./emitter'),
    nconf = module.parent.require('nconf'),
    fs = require('fs'),
    path = require('path');

function render_page(req, res, next) {
    var path = req.path.replace(/\/(api\/)?/, '');
    res.render(path, {});
}

plugin.render_homepage = function(params){
	params.res.render('home',{});
};

plugin.add_homepage_option = function(data, callback){
	data.routes.push({
		route: '4dflow',
		name: '4D Flow Homepage'
	});
	callback(null, data);
};

plugin.add_categories_navigation = function(header, callback) {
	header.navigation.push(
		{
			route: '/categories',
			class: '',
			text: 'Categories',
			iconClass: '',
			title: 'Categories',
			textClass: ''
		}
	);
	callback(null, header);
};

plugin.init = function(params, callback) {
    var app = params.router,
        middleware = params.middleware;

    fs.readFile(path.join(__dirname, '/../routes.json'), function(err, routes_json) {
        var routes = JSON.parse(routes_json);

        routes.forEach(function (route) {
            fs.readFile(path.join(__dirname, '/templates/', route + ".tpl"), function (err, tmpl) {
                app.get('/' + route, middleware.buildHeader, render_page);
                app.get('/api/' + route, render_page);
                emitter.on('templates:compiled', function() {
                    fs.writeFile(path.join(nconf.get('views_dir'), route + '.tpl'), tmpl);
                });
            });
        });
    });

    callback();
};

module.exports = plugin;
