
var db = module.parent.require('./database');
var emitter = module.parent.require('./emitter');
var nconf = module.parent.require('nconf');
var https = require("https");
var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');


function render_page(req, res, next) {
    var path = req.path.replace(/\/(api\/)?/, '');
    res.render(path, {});
}
function render_admin(req, res, next) {
    get_4dflow_endpoint(function (err, endpoint) {
        res.render('admin/endpoint', {endpoint: endpoint});
    });
}
function get_4dflow_endpoint(cb) {
    db.get('plugins:4dflow_endpoint', cb);
}

var plugin = {};

plugin.add_admin_page = function(header, callback) {
	header.plugins.push({
		route: '/config-4dflow',
		icon: 'fa-mobile',
		name: 'Config 4D Flow'
	});

	callback(null, header);
};



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

function read_template_from_file() {
    
}
function read_template_from_https() {
    
}

plugin.init = function(params, callback) {
    var app = params.router;
    var middleware = params.middleware;
    var _templates_dir = path.join(__dirname, "../templates");

    var socket = module.parent.require('./socket.io/admin');
	socket.settings.save_4dflow_endpoint = function(socket, data, callback) {
		db.set('plugins:4dflow_endpoint', JSON.stringify(data), callback);
	};

    // fse.removeSync(_templates_dir);
    // fse.copySync(path.join(__dirname, "../views"), _templates_dir);

    get_4dflow_endpoint(function (err, endpoint) {
        //endpoint = endpoint || "file://" + __dirname;
        //var func = https.
            //if (endpoint.indexOf("file://") === 0)
        fs.readFile(path.join(__dirname, '/../routes.json'), function(err, routes_json) {
            var routes = JSON.parse(routes_json);

            routes.forEach(function (route) {
                // var tmpl = fs.readFileSync(path.join('/tmp/templates', route + ".tpl"), 'utf-8');
                // fs.writeFileSync(path.join(_templates_dir, route + '.tpl'), tmpl);
                app.get('/' + route, middleware.buildHeader, render_page);
                app.get('/api/' + route, render_page);
            });
            callback();
        });
    });


};

module.exports = plugin;
