const config = {
    user: "admin",
    password: "cp363_db",
    server: "cp363-db.cfoq5srjjul5.us-east-2.rds.amazonaws.com",
    database: "herc_rentals",
    port: 3306,
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true
    }
}

module.exports = config;