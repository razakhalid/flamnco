const fs = require("fs");
const path = require("node:path");
const csvParser = require("csv-parser");

const dataInJSON = [];

function convertToJSON(csvFilePath, jsonFilePath) {
    fs.createReadStream(pathToCsvFile)
        .pipe(csvParser())
        .on("data", (data) => {
            dataInJSON.push(data);
        })
        .on("end", () => {
            console.log("CSV parsing complete, writing to JSON...");
            fs.writeFile(pathToOrdersJsonFile, JSON.stringify(dataInJSON), (err, results) => {
               if (err) {
                   console.error(err);
               }
               console.log("Write successful");
            });
        });
}

const pathToCsvFile = path.join(__dirname, "orders.csv");
const pathToOrdersJsonFile = path.join(__dirname, "orders.json");
const pathToInventoryJsonFile = path.join(__dirname, "inventory.json");
const pathToQueriesFile = path.join(__dirname, "queries.txt");
const pathToSchemaFile = path.join(__dirname, "schema.json");

convertToJSON("./orders.json", "./orders.json");


function generateQueries(schemaFilePath, dataFilePath, entity, queriesFilePath) {
    // read schema
    fs.readFile(schemaFilePath, "utf-8", (err, schema) => {
        const schemaForEntity = JSON.parse(schema)[entity];
        const columns = Object.keys(schemaForEntity);

        // read data and generate queries
        fs.readFile(dataFilePath, "utf-8", (err, data) => {
            data = JSON.parse(data);
            let queries = '';
            let numQueries = 0;
            data.forEach((item, i) => {
                const values = columns.map(column => {
                    const dataType = schemaForEntity[column];
                    const value = dataType === 'string' ? `'${item[column]}'` : item[column];
                    return value || i;
                });

                let query = `
                    insert into ${entity} (${columns}) values (${values});
                `;
                queries += query;
                numQueries++;
            });
            console.log(`${numQueries} queries successfully generated, writing to ${pathToQueriesFile}`);
            // write queries to file
            fs.writeFile(queriesFilePath, queries, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Queries successfully written to ${pathToQueriesFile}`);
                }
            });
        });
    });
}

// generateQueries(pathToSchemaFile, pathToInventoryJsonFile, "product", pathToQueriesFile);
// generateQueries(pathToSchemaFile, pathToOrdersJsonFile, "delivery_address", pathToQueriesFile);
// generateQueries(pathToSchemaFile, pathToOrdersJsonFile, "customer", pathToQueriesFile);
generateQueries(pathToSchemaFile, pathToOrdersJsonFile, "ordertbl", pathToQueriesFile);

// generateQueriesFromSchema(pathToSchemaFile, pathToJsonFile, pathToQueriesFile);