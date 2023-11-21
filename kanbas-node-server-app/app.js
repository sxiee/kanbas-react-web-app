import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import "dotenv/config";
import session from "express-session";

const app = express();
Lab5(app);
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
Hello(app)
CourseRoutes(app);
app.use(cors());
app.listen(process.env.PORT || 4000)