const createTables = async() => {
    try{
        let pool = await sql.connect(connection);
        let db = pool.request()
        .query(`
          CREATE TABLE IF NOT EXISTS herc_rentals.Customer (
            idCustomer INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(45) NOT NULL,
            address VARCHAR(45) NOT NULL,
            PRIMARY KEY (idCustomer))
          ENGINE = InnoDB
          AUTO_INCREMENT = 8
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.CustomerEmail (
            email VARCHAR(45) NOT NULL,
            Customer_idCustomer INT(11) NOT NULL,
            PRIMARY KEY (email),
            INDEX fk_idCustomer_idCustomer (Customer_idCustomer ASC) VISIBLE,
            CONSTRAINT fk_idCustomer_idCustomer
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;
          
          CREATE TABLE IF NOT EXISTS herc_rentals.CustomerPhone (
            phone VARCHAR(12) NOT NULL,
            Customer_idCustomer INT(11) NOT NULL,
            PRIMARY KEY (phone),
            INDEX fk_CustomerPhone_idCustomer (Customer_idCustomer ASC) VISIBLE,
            CONSTRAINT fk_CustomerPhone_idCustomer
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;   
          
          CREATE TABLE IF NOT EXISTS herc_rentals.Employees (
            idEmployees INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(45) NOT NULL,
            position VARCHAR(45) NOT NULL,
            salary FLOAT NOT NULL,
            StoreLocation_idStoreLocation INT(11) NOT NULL,
            PRIMARY KEY (idEmployees),
            INDEX fk_Employees_StoreLocation1 (StoreLocation_idStoreLocation ASC) VISIBLE,
            CONSTRAINT fk_Employees_StoreLocation1
              FOREIGN KEY (StoreLocation_idStoreLocation)
              REFERENCES herc_rentals.StoreLocation (idStoreLocation)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          AUTO_INCREMENT = 9
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.EmployeesAddress (
            address VARCHAR(45) NOT NULL,
            employees_idEmployees INT(11) NOT NULL,
            PRIMARY KEY (address),
            INDEX fk_EmployeesAddress_Employees (employees_idEmployees ASC) VISIBLE,
            CONSTRAINT fk_EmployeesAddress_Employees
              FOREIGN KEY (employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.EmployeesEmail (
            email VARCHAR(45) NOT NULL,
            employees_idEmployees INT(11) NOT NULL,
            PRIMARY KEY (email),
            INDEX fk_EmployeesEmail_Employees (employees_idEmployees ASC) VISIBLE,
            CONSTRAINT fk_EmployeesEmail_Employees
              FOREIGN KEY (employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.EmployeesPhone (
            phone VARCHAR(12) NOT NULL,
            employees_idEmployees INT(11) NOT NULL,
            PRIMARY KEY (phone),
            INDEX fk_EmployeesPhone_Employees (employees_idEmployees ASC) VISIBLE,
            CONSTRAINT fk_EmployeesPhone_Employees
              FOREIGN KEY (employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;
          
          CREATE TABLE IF NOT EXISTS herc_rentals.Invoice (
            idInvoice INT(11) NOT NULL AUTO_INCREMENT,
            Customer_idCustomer INT(11) NOT NULL,
            Employees_idEmployees INT(11) NOT NULL,
            Equipment_idEquipment INT(11) NOT NULL,
            StoreLocation_idStoreLocation INT(11) NOT NULL,
            PRIMARY KEY (idInvoice),
            INDEX fk_Invoice_Employees1 (Employees_idEmployees ASC) VISIBLE,
            INDEX fk_Invoice_Customer1 (Customer_idCustomer ASC) VISIBLE,
            INDEX fk_Invoice_Equipment1 (Equipment_idEquipment ASC) VISIBLE,
            INDEX fk_StoreLocation_idStoreLocation (StoreLocation_idStoreLocation ASC) VISIBLE,
            CONSTRAINT fk_Invoice_Customer1
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_Invoice_Employees1
              FOREIGN KEY (Employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_Invoice_Equipment1
              FOREIGN KEY (Equipment_idEquipment)
              REFERENCES herc_rentals.Equipment (idEquipment)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_StoreLocation_idStoreLocation
              FOREIGN KEY (StoreLocation_idStoreLocation)
              REFERENCES herc_rentals.StoreLocation (idStoreLocation)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          AUTO_INCREMENT = 8
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.ProvidesInvoice (
            Customer_idCustomer INT(11) NOT NULL,
            Employees_idEmployees INT(11) NOT NULL,
            PRIMARY KEY (Customer_idCustomer, Employees_idEmployees),
            INDEX fk_Customer_has_Employees_Employees1 (Employees_idEmployees ASC) VISIBLE,
            CONSTRAINT fk_Customer_has_Employees_Customer1
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_Customer_has_Employees_Employees1
              FOREIGN KEY (Employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.StoreLocation (
            idStoreLocation INT(11) NOT NULL AUTO_INCREMENT,
            store_name VARCHAR(45) NOT NULL,
            PRIMARY KEY (idStoreLocation),
            UNIQUE INDEX store_name_UNIQUE (store_name ASC) VISIBLE)
          ENGINE = InnoDB
          AUTO_INCREMENT = 5
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.StoreEmail (
            idStoreLocation INT(11) NOT NULL,
            email VARCHAR(45) NOT NULL,
            PRIMARY KEY (idStoreLocation),
            CONSTRAINT StoreEmail_ibfk_1
              FOREIGN KEY (idStoreLocation)
              REFERENCES herc_rentals.StoreLocation (idStoreLocation)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.StoreAddress (
            idStoreLocation INT(11) NOT NULL,
            address VARCHAR(45) NOT NULL,
            PRIMARY KEY (idStoreLocation),
            CONSTRAINT StoreAddress_ibfk_1
              FOREIGN KEY (idStoreLocation)
              REFERENCES herc_rentals.StoreLocation (idStoreLocation)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.StorePhone (
            idStoreLocation INT(11) NOT NULL,
            phone VARCHAR(12) NOT NULL,
            PRIMARY KEY (idStoreLocation),
            CONSTRAINT StorePhone_ibfk_1
              FOREIGN KEY (idStoreLocation)
              REFERENCES herc_rentals.StoreLocation (idStoreLocation)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.Equipment (
            idEquipment INT(11) NOT NULL AUTO_INCREMENT,
            maiteneance TINYINT(1) NOT NULL,
            availability TINYINT(1) NOT NULL,
            manufacturer VARCHAR(45) NULL DEFAULT NULL,
            rental_cost FLOAT NOT NULL,
            description VARCHAR(45) NULL DEFAULT NULL,
            StoreLocation_idStoreLocation INT(11) NOT NULL,
            PRIMARY KEY (idEquipment),
            INDEX fk_Equipment_StoreLocation (StoreLocation_idStoreLocation ASC) VISIBLE,
            CONSTRAINT fk_Equipment_StoreLocation
              FOREIGN KEY (StoreLocation_idStoreLocation)
              REFERENCES herc_rentals.StoreLocation (idStoreLocation)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          AUTO_INCREMENT = 5
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.SerialNum (
            serial_num INT(11) NOT NULL,
            equipment_idequipment INT(11) NOT NULL,
            PRIMARY KEY (serial_num),
            INDEX fk_Equipment_SerialNum (equipment_idequipment ASC) VISIBLE,
            CONSTRAINT fk_Equipment_SerialNum
              FOREIGN KEY (equipment_idequipment)
              REFERENCES herc_rentals.Equipment (idEquipment))
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1
            
          CREATE TABLE IF NOT EXISTS herc_rentals.Maintains (
            Equipment_idEquipment INT(11) NOT NULL,
            Employees_idEmployees INT(11) NOT NULL,
            PRIMARY KEY (Equipment_idEquipment, Employees_idEmployees),
            INDEX fk_Employees_has_Equipment_Employees1 (Employees_idEmployees ASC) VISIBLE,
            CONSTRAINT fk_Employees_has_Equipment_Employees1
              FOREIGN KEY (Employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_Equipment_has_Employees_Equipment1
              FOREIGN KEY (Equipment_idEquipment)
              REFERENCES herc_rentals.Equipment (idEquipment)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.RentalAgreement (
            idRentalAgreement INT(11) NOT NULL AUTO_INCREMENT,
            price FLOAT NOT NULL,
            payment_type VARCHAR(45) NOT NULL,
            insurance_cost VARCHAR(45) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            Customer_idCustomer INT(11) NOT NULL,
            Equipment_idEquipment INT(11) NOT NULL,
            PRIMARY KEY (idRentalAgreement),
            INDEX fk_RentalAgreement_Customer1 (Customer_idCustomer ASC) VISIBLE,
            INDEX fk_Equipment_idEquipment1 (Equipment_idEquipment ASC) VISIBLE,
            CONSTRAINT fk_Equipment_idEquipment1
              FOREIGN KEY (Equipment_idEquipment)
              REFERENCES herc_rentals.Equipment (idEquipment)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_RentalAgreement_Customer1
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          AUTO_INCREMENT = 8
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.Rents (
            RentalAgreement_idRentalAgreement INT(11) NOT NULL,
            Customer_idCustomer INT(11) NOT NULL,
            PRIMARY KEY (RentalAgreement_idRentalAgreement, Customer_idCustomer),
            INDEX fk_RentalAgreement_has_Customer_Customer1 (Customer_idCustomer ASC) VISIBLE,
            CONSTRAINT fk_RentalAgreement_has_Customer_Customer1
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_RentalAgreement_has_Customer_Equipment
              FOREIGN KEY (RentalAgreement_idRentalAgreement)
              REFERENCES herc_rentals.RentalAgreement (idRentalAgreement)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.CreatesRentalAgreement (
            Customer_idCustomer INT(11) NOT NULL,
            Employees_idEmployees INT(11) NOT NULL,
            PRIMARY KEY (Customer_idCustomer, Employees_idEmployees),
            INDEX fk_Customer_has_Employees_Employees (Employees_idEmployees ASC) VISIBLE,
            CONSTRAINT fk_Customer_has_Employees_Customer
              FOREIGN KEY (Customer_idCustomer)
              REFERENCES herc_rentals.Customer (idCustomer)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_Customer_has_Employees_Employees
              FOREIGN KEY (Employees_idEmployees)
              REFERENCES herc_rentals.Employees (idEmployees)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1;

          CREATE TABLE IF NOT EXISTS herc_rentals.InvoiceRental (
            RentalAgreement_idRentalAgreement INT(11) NOT NULL,
            Invoice_idInvoice INT(11) NOT NULL,
            PRIMARY KEY (RentalAgreement_idRentalAgreement, Invoice_idInvoice),
            INDEX fk_RentalAgreement_Invoice (Invoice_idInvoice ASC) VISIBLE,
            CONSTRAINT fk_Invoice_RentalAgreement
              FOREIGN KEY (RentalAgreement_idRentalAgreement)
              REFERENCES herc_rentals.RentalAgreement (idRentalAgreement)
              ON DELETE CASCADE
              ON UPDATE CASCADE,
            CONSTRAINT fk_RentalAgreement_Invoice
              FOREIGN KEY (Invoice_idInvoice)
              REFERENCES herc_rentals.Invoice (idInvoice)
              ON DELETE CASCADE
              ON UPDATE CASCADE)
          ENGINE = InnoDB
          DEFAULT CHARACTER SET = latin1
          `)
        console.log('Tables succesfully created.');
        return db;
    }
    catch(error){
        console.log(error);
    }
}


module.exports(createTables)

