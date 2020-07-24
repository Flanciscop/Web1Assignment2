const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));




app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('login.html', {quote: null, error: null});
})
app.get('/login.html', function (req, res) {
  res.render('login.html', {quote: null, error: null});
})
app.get('/home', function (req, res) {
  res.render('home.ejs', {quote: null, error: null});
})
app.get('/salty', function (req, res) {
	let url = `https://gist.githubusercontent.com/Flanciscop/9c45ff9603bb248387c12af76e49ca91/raw/2611e5a1ce64f3806e0b3cafe410216f9c4e10b9/itemPage1.json`
	request(url, function (err, response, body) {
		if(err){
			res.render('salty', {quote: null, error: 'Error  111, please try again'});
		} 
		else {		
			let data = JSON.parse(body);
			console.log(data);
            
			if(data == undefined){
				res.render('salty', {quote: null, error: 'Error 2222, please try again'});
			}
			else {
				res.render("salty.ejs", {data: data})
			}
		}
	});
})
app.get('/sweet', function (req, res) {
	let url = `https://gist.githubusercontent.com/Flanciscop/ac73e94da283c53adbfe1958ee7a4894/raw/6ef94db60ab94f024ff11818164162c06bad98ef/itemPage2.json`
	request(url, function (err, response, body) {
		if(err){
			res.render('sweet', {quote: null, error: 'Error  111, please try again'});
		} 
		else {		
			let data = JSON.parse(body);
			console.log(data);
            
			if(data == undefined){
				res.render('sweet', {quote: null, error: 'Error 2222, please try again'});
			}
			else {
				res.render("sweet.ejs", {data: data})
			}
		}
	});
})
app.get('/contactUs', function (req, res) {
  res.render('contactUs.html', {quote: null, error: null});
})






//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
	res.status(404).render('notfound');
});

app.listen(3000, function () {
	console.log('This app listening on port 3000!')
})