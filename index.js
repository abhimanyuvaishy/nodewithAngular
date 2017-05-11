var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var cors=require('cors');

var index=require('./routes/index');
var tasks=require('./routes/tasks');

var app=express();

//view engine.

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder

app.use(express.static(path.join(__dirname,'client')));

//Body parser Middle ware.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// set routing.

app.use('/',index);
app.use('/api',tasks);

// set ports.

var port=3000;

app.listen(port,function(){
console.log('server started on the port number '+port);
});