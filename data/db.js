const mysql = require("mysql2");

const dbConfiguration = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "movies_db"
}

function onDatabaseConnection(error) {
    if (error) throw err;
    console.log('Sei connesso al DB!');
};

const dbConnection = mysql.createConnection(dbConfiguration);
dbConnection.connect(onDatabaseConnection);



module.exports = dbConnection;