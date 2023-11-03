const express = require('express');
const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    dob: {
        type: Date,
        require: true,
        trim: true
    },
    score: {
        type: Number,
        require: true,
        trim: true
    },
    country: {
        type: String,
        require: true,
        trim: true
    },
    event: {
        type: Number,
        default: 100
    }
});
//we are creating a new collection
const mensRanking=new mongoose.model("MenRanking",menSchema);

module.exports=mensRanking;