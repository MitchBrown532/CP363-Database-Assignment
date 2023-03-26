const populateTables = async() => {
    try{
        let pool = await sql.connect(connection);
        let db = pool.request()
        .query(`
            INSERT INTO Customer (name, address) 
            VALUES  ("John Doe", "123 Main St, Anytown USA"),
                    ("Sarah Johnson", "456 Park Ave, New York City, USA"),
                    ("Michael Brown", "789 Oak St, Chicago, USA"),
                    ("Emma Wilson", "111 Elm St, Los Angeles, USA"),
                    ("David Lee", "222 Pine St, San Francisco, USA"),
                    ("Rachel Jackson", "333 Maple St, Seattle, USA"),
                    ("Kevin Chen", "444 Cedar St, Vancouver, Canada"),
                    ("Laura Hernandez", "555 Cherry St, Mexico City, Mexico"),
                    ("Mohammad Khan", "666 Birch St, Karachi, Pakistan"),
                    ("Anna Kim", "777 Aspen St, Seoul, South Korea");
            INSERT INTO CustomerEmail(email)
            VALUES  ("johndoe@example.com"),
                    ("sarahjohnson@example.com"),
                    ("michaelbrown@example.com"),
                    ("emmawilson@example.com"),
                    ("davidlee@example.com"),
                    ("racheljackson@example.com"),
                    ("kevinchen@example.com"),
                    ("laurahernandez@example.com"),
                    ("mohammadkhan@example.com"),
                    ("annakim@example.com");
            INSERT INTO CustomerPhone(phone)
            VALUES  (555-555-1212),
                    (555-555-3434),
                    (555-555-5656),
                    (555-555-7878),
                    (555-555-9090),
                    (555-555-2323),
                    (555-555-4545),
                    (555-555-6767),
                    (300-555-1212),
                    (519-555-3434);

            INSERT INTO Employees (name, position, salary, StoreLocation_idStoreLocation) 
            VALUES  ('Jessica Hernandez', 'Manager', 60000.00, 1),
                    ('Michael Johnson', 'Sales Associate', 35000.00, 1),
                    ('Emma Davis', 'Customer Service Representative', 30000.00, 2),
                    ('Andrew Wilson', 'Rental Technician', 40000.00, 2),
                    ('Amanda Rodriguez', 'Assistant Manager', 45000.00, 3),
                    ('David Lee', 'Sales Associate', 35000.00, 3),
                    ('Ashley Kim', 'Customer Service Representative', 30000.00, 4),
                    ('Steven Chen', 'Rental Technician', 40000.00, 4),
                    ('Samantha Martinez', 'Assistant Manager', 45000.00, 5),
                    ('Kevin Nguyen', 'Sales Associate', 35000.00, 5);
            INSERT INTO EmployeesAddress (address, employees_idEmployees)
            VALUES  ('123 Main St, Anytown USA', 1),
                    ('456 Park Ave, New York City, USA', 2),
                    ('789 Oak St, Chicago, USA', 3),
                    ('111 Elm St, Los Angeles, USA', 4),
                    ('222 Pine St, San Francisco, USA', 5),
                    ('333 Maple St, Seattle, USA', 6),
                    ('444 Cedar St, Vancouver, Canada', 7),
                    ('555 Cherry St, Mexico City, Mexico', 8),
                    ('666 Birch St, Karachi, Pakistan', 9),
                    ('777 Aspen St, Seoul, South Korea', 10);
            INSERT INTO EmployeesEmail (email, employees_idEmployees)
            VALUES  ('jessica_hernandez@gmail.com', 1),
                    ('michael_johnson@yahoo.com', 2),
                    ('emma_davis@hotmail.com', 3),
                    ('andrew_wilson@gmail.com', 4),
                    ('amanda_rodriguez@yahoo.com', 5),
                    ('david_lee@hotmail.com', 6),
                    ('ashley_kim@gmail.com', 7),
                    ('steven_chen@yahoo.com', 8),
                    ('samantha_martinez@hotmail.com', 9),
                    ('kevin_nguyen@gmail.com', 10);
            INSERT INTO EmployeesPhone (phone, employees_idEmployees)
            VALUES  ('555-123-4567', 1),
                    ('555-234-5678', 2),
                    ('555-345-6789', 3),
                    ('555-456-7890', 4),
                    ('555-567-8901', 5),
                    ('555-678-9012', 6),
                    ('555-789-0123', 7),
                    ('555-890-1234', 8),
                    ('555-901-2345', 9),
                    ('555-012-3456', 10);
                
            INSERT INTO Invoice (Customer_idCustomer, Employees_idEmployees, Equipment_idEquipment, StoreLocation_idStoreLocation)
            VALUES  (1, 2, 3, 4),
                    (2, 1, 4, 3),
                    (3, 4, 2, 1);
            INSERT INTO ProvidesInvoice (Customer_idCustomer, Employees_idEmployees)
            VALUES  (1, 2),
                    (2, 1),
                    (3, 4);
            
            INSERT INTO StoreLocation (store_name)
            VALUES  ('Main Street'),
                    ('Park Avenue'),
                    ('Oak Street'),
                    ('Elm Street'),
                    ('Pine Street');
            INSERT INTO StoreEmail (idStoreLocation, email)
            VALUES  (1, 'mainstreet@hercrentals.com'),
                    (2, 'parkave@hercrentals.com'),
                    (3, 'oakstreet@hercrentals.com'),
                    (4, 'elmstreet@hercrentals.com'),
                    (5, 'pinestreet@hercrentals.com');
            INSERT INTO StoreAddress (idStoreLocation, address)
            VALUES  (1, '123 Main Street, Anytown USA'),
                    (2, '456 Park Avenue, New York City, USA'),
                    (3, '789 Oak Street, Chicago, USA'),
                    (4, '111 Elm Street, Los Angeles, USA'),
                    (5, '222 Pine Street, San Francisco, USA');
            INSERT INTO StorePhone (idStoreLocation, phone)
            VALUES  (1, '555-1234'),
                    (2, '555-5678'),
                    (3, '555-9101'),
                    (4, '555-1212'),
                    (5, '555-2323');

            INSERT INTO Equipment (maiteneance, availability, manufacturer, rental_cost, description, StoreLocation_idStoreLocation)
            VALUES  (0, 1, "Caterpillar", 100.00, "Excavator", 1),
                    (1, 0, "Bobcat", 75.00, "Skid steer loader", 2),
                    (0, 1, "JLG", 200.00, "Boom lift", 3),
                    (1, 1, "Genie", 150.00, "Scissor lift", 4),
                    (0, 0, "John Deere", 50.00, "Lawn mower", 5);
            INSERT INTO SerialNum (serial_num, equipment_idequipment)
            VALUES  (1001, 1),
                    (1002, 2),
                    (1003, 3),
                    (1004, 4),
                    (1005, 5);
            INSERT INTO Maintains (Equipment_idEquipment, Employees_idEmployees)
            VALUES  (1, 1),
                    (2, 2),
                    (3, 3),
                    (4, 4),
                    (5, 5);

            INSERT INTO RentalAgreement (price, payment_type, insurance_cost, start_date, end_date, Customer_idCustomer, Equipment_idEquipment)
            VALUES  (500.00, 'Credit Card', '100.00', '2022-01-01', '2022-01-10', 1, 1),
                    (200.00, 'Debit Card', '50.00', '2022-02-15', '2022-02-20', 2, 2),
                    (1000.00, 'Cash', '200.00', '2022-03-01', '2022-03-15', 3, 3),
                    (750.00, 'Credit Card', '150.00', '2022-04-01', '2022-04-08', 4, 4),
                    (400.00, 'Debit Card', '100.00', '2022-05-01', '2022-05-05', 5, 5);
            INSERT INTO Rents (RentalAgreement_idRentalAgreement, Customer_idCustomer)
            VALUES  (1, 1),
                    (2, 2),
                    (3, 3),
                    (4, 4),
                    (5, 5);       
            INSERT INTO CreatesRentalAgreement (Customer_idCustomer, Employees_idEmployees)
            VALUES  (1, 1),
                    (2, 2),
                    (3, 3),
                    (4, 4),
                    (5, 5);
            INSERT INTO InvoiceRental (RentalAgreement_idRentalAgreement, Invoice_idInvoice)
            VALUES  (1, 1),
                    (2, 2),
                    (3, 3),
                    (4, 4),
                    (5, 5);
          `)
        console.log('Tables succesfully populated.');
        return db;
    }
    catch(error){
        console.log(error);
    }
}


module.exports = populateTables

