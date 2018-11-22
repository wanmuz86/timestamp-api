var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req,res){
	res.json({unix:new Date().getTime(), utc:new Date()	})
});

router.get('/:time', function(req,res){
console.log(parseInt(req.params.time*1000))
	if (!isNaN(req.params.time)){
		console.log("here")
 	res.json({unix:req.params.time , 
 		utc:new Date(parseInt(req.params.time*1000))})
 }
 else if (new Date(req.params.time) != "Invalid Date") {
 	res.json({unix:
 		new Date(req.params.time).getTime() , 
 		utc:req.params.time})
 }
 else {
 	res.json({error:"Invalid Date"})
 }
})
app.use('/api', router);

app.listen(port);

console.log('Magic happens on port ' +port);
