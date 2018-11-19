var http = require('http');
const axios = require('axios');



http.createServer(function(req,res){

		
			axios.get('https://api.github.com/users/arocki7/repos')
				.then(result => {

				console.log("Printing Repo Names:");
				for (var i=0; i<result["data"].length; i++ ){
				console.log(result["data"][i]["full_name"]);
				}});
			 //.catch(err => console.log(err.toString()));

		

		    //res.setHeader('Content-Type', 'application/json');
			//res.write("success");
			res.end();
}).listen(8080);