const sql = require('mysql');
const connection = require('./db_connection.js');

const queryTables = async() => {
    try{
        let pool = await sql.createConnection(connection);
        let db = pool.query(`
            //Query 1: Show all customers, ordered by their names.
                SELECT * 
                FROM Customer 
                ORDER BY name;

            //Query 2: Show all employees, ordered by their names.
                SELECT * 
                FROM Employees 
                ORDER BY name;

            //Query 3: Show all Equipment, ordered by their ID.
                SELECT * 
                FROM Equipment
                ORDER BY idEquipment;

            //Query 4: Show all Store Locations.
                SELECT * 
                FROM StoreLocation;
            
            //Query 5: Show all equipment due for maintenance.
                SELECT * 
                FROM Equipment
                WHERE maiteneance = 1;

            //Query 6: Finds distinct customers and returns the employees who provided them the rental agreement.
                SELECT DISTINCT(idCustomer), idEmployees
                FROM CreatesRentalAgreement
                ORDER BY idCustomer;

            //Query 7: Used to find how many rental agreement different employees made
                SELECT Employees.name, COUNT(*) '# of rental agreements made'
                FROM Customer
                JOIN CreatesRentalAgreement ON Customer.idCustomer = CreatesRentalAgreement.Customer_idCustomer
                JOIN Employees ON Employees.idEmployees = CreatesRentalAgreement.Employees_idEmployees
                GROUP BY Employees.name;
                    
            //Query 8: Finds average rental period of different customers
                SELECT name, AVG(DATEDIFF(end_date,start_date)) 'Avg. Rental Period'
                FROM Customer
                JOIN Rents ON Customer.idCustomer = Rents.Customer_idCustomer
                JOIN RentalAgreement ON RentalAgreement.idRentalAgreement = Rents.RentalAgreement_idRentalAgreement
                GROUP BY Customer.name;
            
            //Query 9: Finds Employee(s) named John.
                SELECT DISTINCT(name), position
                FROM Employee
                WHERE name LIKE 'John%';

            //Query 10: Finds the average price of any given rental for a day
                SELECT AVG(price)/AVG(DATEDIFF(end_date,start_date)) 'Average Daily Price of Rentals'
                FROM RentalAgreement;

            //Query 11: Where the StoreLocation id equal 4 and Equipment Id  equals 3 in Invoice.
            SELECT *
            FROM invoice
            WHERE StoreLocation_idStoreLocation = 4 AND Equipment_idEquipment = 3;
            `)  
        console.log('Tables succesfully queried.');
        return db;
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {queryTables}
