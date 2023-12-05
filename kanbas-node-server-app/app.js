<<<<<<< Updated upstream
import express from 'express';
import Hello from "./hello.js"
=======
import express from "express";
import Hello from "./hello.js";
>>>>>>> Stashed changes
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
<<<<<<< Updated upstream
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
=======
const app = express();
app.use(express.json());
ModuleRoutes(app);
app.use(cors());
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(4000);
>>>>>>> Stashed changes
