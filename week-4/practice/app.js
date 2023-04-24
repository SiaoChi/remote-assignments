const express = require('express');
const app = express();
const {getNotes, getNote, createNote} = require('./database.js')

app.use(express.json())
app.get('/notes', async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})

app.get('/notes/:id', async (req, res) => {
    const {id} = req.params
    const note = await getNote(id)
    res.send(note)
})

app.post('/notes', async (req, res) => {
    const {title, contents} = req.body
    const note = await createNote(title, contents)
    res.send(note)
})

// Error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8000, function () {
    console.log('server is running on 8000');
});
