const connection  = require('./dbConnection')


const getEmployees = async() => {
    try{
        let pool = await sql.connect(connection)
        let employees = pool.request().query("SELECT * from Employees")
        console.log(employees)
        return employees
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getEmployees
}