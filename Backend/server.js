const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const port = 3000
dotenv.config()
const { MongoClient } = require('mongodb');

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'lockbyte';
app.use(bodyParser.json())
app.use(cors())
client.connect();
//get a password
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');

  const findResult = await collection.find({}).toArray();

  res.json(findResult)
})
//Save a password
app.post('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');

  const findResult = await collection.insertOne(password);

  res.send({ success: true, result: findResult })
})

app.delete('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');

  const findResult = await collection.deleteOne(password);

  res.send({ success: true, result: findResult })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
