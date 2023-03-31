const   sql                 = require('mysql'),
        dropTables          = require('./src/db_files/drop_tables'),
        populateTables      = require('./src/db_files/populate_tables'),
        createTables        = require('./src/db_files/create_tables'),
        queryTables         = require('./src/db_files/query_tables');


function printMenu() {
    console.log("=".repeat(50))
    console.log("1 = Drop tables");
    console.log("2 = Create tables");
    console.log("3 = Populate tables");
    console.log("4 = Query tables");
    console.log("E = Exit");
    console.log("=".repeat(50))
}

function selectOption(option) {
    switch (option) {
        case "1":
            dropTables.dropTables();
            console.log("Drop tables selected");
            break;
        case "2":
            createTables.createTables();
            console.log("Create tables selected");
            break;
        case "3":
            populateTables.populateTables();
            console.log("Populate tables selected");
            break;
        case "4":
            queryTables.queryTables;
            console.log("Query tables selected");
            break;
        case "E":
            console.log("Exit selected.");
            console.log("Bye Bye! :)");
            process.exit(0);

        default:
            console.log("Invalid option");
    }
}

async function runMenu() {
  while (true) {
    printMenu();
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const option = await new Promise(resolve => {
      readline.question("Select an option: ", (option) => {
        readline.close();
        resolve(option);
      });
    });

    selectOption(option.toUpperCase());

    await new Promise(resolve => setTimeout(resolve, 1500));
  }
}

runMenu();