// const express = require("express");
import session from "express-session";
import mongoose from "mongoose";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import UserRoutes from "./users/routes.js";
import cors from "cors";


const app = express();
const DB_CONNECTION_STRING = "mongodb+srv://sarahxie:<password>@cluster0.1gsp0ii.mongodb.net/?retryWrites=true&w=majority";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
Lab5(app);
HelloRoutes(app);

app.listen(4000);