const { Client } = require('pg')

const client = new Client({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "survey",
    password: "password"
})

let connector = async (tableName) => {
    try {
        await client.connect((err) => {
            if (err) console.error(`connection failed ${err}`)
            else console.log(`\nConnected successfully to postgresql DATABASE and TABLE named:${"tableName"} :) `)
            // QueryFullDbTable(command,identifier,tableName)
            // sqlInsertToTable('insert','into',tableName)
            // QueryFullDbTable(command,identifier,tableName)
            // sqlInsertToTable('insert','into',tableName)
        })
    } catch (error) {
        client.query('ROLLBACK')
        console.clear()

        return error
    }

}
let createTable = async (name) => {
    let sqlQuery = `CREATE TABLE IF NOT EXISTS ${name}
    (id SERIAL PRIMARY KEY,
	    surname VARCHAR (100) UNIQUE NOT NULL,
	    first_name VARCHAR (50) NOT NULL,
	    contact_numbers VARCHAR (255) UNIQUE NOT NULL,
	    date TIMESTAMP,
        age INT NOT NULL,
        favourite_food VARCHAR(50), 
        indications boolean[]
    )`
    let sqlQuery2 = `INSERT INTO ${name}(id,surname,first_name,contact_numbers,date,age,favourite_food,indications) values(2,'Motbhokwa','Elbi',06612555894, '2013-03-02 12:05:00',25,'stir fries','{true,false,true,false}')`

    client.query('BEGIN')
    await client.query(sqlQuery)
    // await client.query(sqlQuery2)

    await client.query('COMMIT')
    const  rows  = client.query(`SELECT * FROM ${name}`)
    console.log((await rows).rows)
}

let dropTable = async (name) => {
    let sqlQuery = `DROP TABLE IF EXISTS ${name}`

    try {
        await client.query('BEGIN')
        await client.query(sqlQuery)
        await client.query('COMMIT')
    } catch (err) {
        await client.query('ROLLBACK')
        return ({ message: err })
    } finally {
        await client.end()
        console.log('\ntable dropped successfully\n')
    }
}
// connector()
module.exports = { connector,createTable,dropTable }