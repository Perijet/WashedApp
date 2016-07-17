var express 		= require('express');
var methodOverride 	= require('method-override');
var bodyParser 		= require('body-parser');
var routes 			= require('./controllers/washedapp_controllers.js');

var app 	= express();
var PORT 	= process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('public'));
app.use('/', routes);
//app.use('/inv', routes);
// app.use('/inv/create', routes);
// app.use('/inv/update', routes);
// app.use('/inv/delete', routes);


app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


app.listen(PORT, function(){
	console.log('Listening on port %d', PORT);

});