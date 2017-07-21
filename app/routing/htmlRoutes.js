var path = require ('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "seinfeld_db"
});

module.exports = function (app) {
	app.get("/",function(req,res){
		res.sendFile(path.join(__dirname, "/../public/index.html"));
	})
	app.get("/cast",function(req,res){
		connection.query("select * from characters", function(err,res){
			if(err) throw err
			var html = "<h1> Magical Schools </h1>";

		    // Here we begin an unordered list.
		    html += "<ul>";

		    // We then use the retrieved records from the database to populate our HTML file.
		    for (var i = 0; i < result.length; i++) {
		      html += "<li><p> ID: " + result[i].id + "</p>";
		      html += "<p>Name: " + result[i].name + " </p>";
		      html += "<p>Coolness: " + result[i].coolness_points + " </p>";
		      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
		    }
		    // We close our unordered list.
		    html += "</ul>";
		    // Finally we send the user the HTML file we dynamically created.
		    res.send(html);
		})
	})
}