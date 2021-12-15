const express = require('express')
const mysql = require('mysql')

//connection
const db=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:''
})

// connect to mySQL
db.connect(err => {
    if(err) {
        throw err
    }
    console.log('My SQL has been Connected!')
})
const app= express()

//database
app.get('/createdb', (req,res) => {
    const sql ='CREATE DATABASE nodemysql'
    db.quert(sql, err => {
        if(err){
            throw err
        }
        res.send('Your Database has been Created!')
})
})