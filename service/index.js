// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

const connectionString = 'mongodb+srv://jonas:<password>@cluster0.49ssl.mongodb.net/<dbname>?retryWrites=true&w=majority';
const mongoose = require("mongoose");
mongoose.connect(connectionString);
const db = mongoose.connection();

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  membershipDate: Date,
  userRole: String
});

const UserModel = mongoose.model('User', UserSchema);

const jsonsUser = new UserModel({
  username: 'Json',
  membershipDate: '2021-01-26',
  userRole: 'admin'
})

jsonsUser.save(function (err) {
  if (err) return handleError(err);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/users")..

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
