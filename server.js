var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");
    
    // config for your database
    var config = {
        user: 'applicationuser',
        password: 'bazinga!',
        server: 'localhost', 
        database: 'rahmani',
        port: 1433
    };


    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select top (10) UAN,iEthicalId,FirstName,LastName from People where IsDeleted = 0', function (err, recordset) 
        {
       
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('CleanChoice Energy SQL Server Node JS Connector : navigate to http://localhost/5000 for query output  the server is running lets just hope this shit does not crash..');
});



