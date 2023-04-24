var mysql = require('mysql2');
var dotenv = require('dotenv');
dotenv.config()

const pool = mysql.createPool({
    // host:'127.0.0.1',
    // user:'root',
    // password:'',
    // database:'notes_app'
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

console.log(process.env.MYSQL_HOST)

// table name = notes
async function getNotes() {
    const [rows] = await pool.query("select * from notes")
    return rows
}

// const notes = await getNotes()
// console.log(notes)

async function getNote(id) {
    const [rows] = await pool.query(`
        SELECT *
        FROM notes
        WHERE id = ?
    `, [id])
    return rows[0]
}

// const note = await getNote(1)
// console.log(note)

async function createNote(title, contents) {
    const [result] = await pool.query(`
        INSERT INTO notes (title, contents)
        VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId
    return getNote(id)
}

// const result = await createNote('test','test')
// console.log(result)

module.exports = {getNotes, getNote, createNote}
