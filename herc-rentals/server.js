const dbOperation = require('./dbFiles/dbOperation')



dbOperation.getEmployees().then(res => {
    console.log(res.recordset);
})

