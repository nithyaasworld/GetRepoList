const axios = require('axios');

var gitUserName = process.stdin;
gitUserName.setEncoding('utf-8');

console.log("Please input Git UserName:");

//Function to get Repo Names of Entered Username

gitUserName.on('data',function(data){
				
	axios.get(`https://api.github.com/users/${data.trim()}/repos`)
	.then(result => {
		console.log(`\nPrinting Repo List of the User: ${data.trim()}\n`);
		for (var i=0; i<result["data"].length; i++ ){
		var repoName = result["data"][i]["full_name"];
		var repoNameTrimmed = repoName.replace(`${data.trim()}/`,"");
		console.log(repoNameTrimmed);
		}
	})
	.catch(err => console.log("No Such User Found"));
})