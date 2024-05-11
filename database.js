import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MYSQL_PASS);


// Creating the connection to RDS Database
// Replace the following:
// process.env.MYSQL_HOST -> "YOUR_RDS_CONNECTION_ENDPOINT"
// process.env.MYSQL_USER -> "YOUR_RDS_USER_NAME"
// process.env.MYSQL_PASS -> "YOUR_RDS_DB_PASSWORD"
// process.env.MYSQL_DATABASE -> "YOUR_RDS_DB_NAME"

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
}).promise();


// Fetching Records from the table
async function getRecords() {
    const [records] = await connection.query("SELECT * from people");
    return records;
}

const people = await getRecords();
console.log(people);

