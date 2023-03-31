const sql = require('mysql');
const connection = require('./db_connection.js');

const dropTables = async() => {
    try{
        let pool = await sql.createConnection(connection);
        let db = pool.query(`
            DROP TABLE IF EXISTS Customer CASCADE;
            DROP TABLE IF EXISTS CustomerEmail;
            DROP TABLE IF EXISTS CustomerPhone;

            DROP TABLE IF EXISTS Employees CASCADE;
            DROP TABLE IF EXISTS EmployeesPhone;
            DROP TABLE IF EXISTS EmployeesEmail;
            DROP TABLE IF EXISTS EmployeesAddress; 

            DROP TABLE IF EXISTS StoreLocation;
            DROP TABLE IF EXISTS StoreAddress;
            DROP TABLE IF EXISTS StorePhone;
            DROP TABLE IF EXISTS StoreEmail;

            DROP TABLE IF EXISTS Equipment CASCADE;
            DROP TABLE IF EXISTS Maintains;
            DROP TABLE IF EXISTS SerialNum;
            
            DROP TABLE IF EXISTS Rents;
            DROP TABLE IF EXISTS RentalAgreement;
            DROP TABLE IF EXISTS CreatesRentalAgreement;
            
            DROP TABLE IF EXISTS Invoice;
            DROP TABLE IF EXISTS InvoiceRental;            
            DROP TABLE IF EXISTS ProvidesInvoice;            
            `)
        console.log('Tables succesfully dropped.');
        return db;
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {dropTables}