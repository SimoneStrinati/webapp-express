const mysql = require("mysql2");

const dbConfiguration = {
    host: process.env.DB_HOST || "localhost", // ||"localhost" è un dato di default in caso il file "env" non esista
    port: process.env.DB_PORT || 3306, // || 3306 è un dato di default in caso il file "env" non esista
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

function onDatabaseConnection(error) {
    if (error) throw err;
    console.log('Sei connesso al DB!');
};

const dbConnection = mysql.createConnection(dbConfiguration);
dbConnection.connect(onDatabaseConnection);



module.exports = dbConnection;