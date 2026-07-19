const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post('/notes', (req, res) => {

    const note = req.body;

    notes.push(note);
    
    res.status(201).json({message : "notes created successfully"});

})

app.get('/notes', (req, res) =>{

    res.status(200).json({message : "notes fetched successfully", notes : notes})

})

app.patch('/notes/:index', (req, res) =>{

    if(notes[index] === null || notes[index] === undefined){

        res.status(400).json({message : "note is not present "})

    }

    const index = req.params.index;

    let title = notes[index].title;

    let description = notes[index].description;

    if(req.body.title){ title = req.body.title};

    if(req.body.description){ description = req.body.description};

    notes[index].title = title;

    notes[index].description = description

    res.status(200).json({message : "note updated successfully "})

})

app.delete('/notes/:index', (req, res) =>{
    
    const index = req.params.index;

    if(notes[index] === null || notes[index] === undefined){

        res.status(400).json({message : "note is already deleted or not present "})

    }

    else{

        delete notes[index];

        res.status(200).json({message : "note deleted successfully"})

    }

})

module.exports = app;