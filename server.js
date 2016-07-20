var handlebars 	= require('handlebars');
var express 		= require('express');
var methodOverride 	= require('method-override');
var bodyParser 		= require('body-parser');
var routes 			= require('./controllers/washedapp_controllers.js');
var handlebars = require('handlebars');
var moment = require('moment');

//var hbs = require('hbs');

handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

var app 	= express();
var PORT 	= process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));
app.use('/', routes);


app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    helpers: {
		formatDate: function (date, format) {
            return moment(date).format('MM/DD/YYYY');
        }
    }
}));

app.set('view engine', 'handlebars');


app.listen(PORT, function(){
	console.log('Listening on port %d', PORT);

});