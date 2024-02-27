const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: '1q2w3e',
    database: 'nodedb',
};

const addPeople = async (connection) => {
    const name = `willian-${(new Date).getTime()}`;
    const sql = mysql.format('INSERT INTO people(name) values(?)', [name]);
    await connection.query(sql);
}

const getAllPeople = async(res, connection) => {
    const sql = 'SELECT id, name FROM people';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        let list = '';
        for (let people of results) {
            list += `<li>ID: ${people.id} || NAME: ${people.name}</li>`;
        }
        connection.end();
        res.send(`<h1>Full Cycle Rocks!</h1><ul>${list}</ul>`);
    });
}

app.get('/', async (req, res) => {
    const connection =  mysql.createConnection(config);
    connection.connect();
    await addPeople(connection);
    getAllPeople(res, connection);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
