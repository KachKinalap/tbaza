import dotenv from 'dotenv'
import express from 'express'
import router from "./src/routes/routes.js"
import database from "./src/db/conn.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

global.__filenameProj = fileURLToPath(import.meta.url);
global.__dirnameProj = dirname(__filenameProj);


dotenv.config()

const app = express()
const db = database

app.use(express.json())
//need for working with loopback, not need while working through Internet
app.use(cors({ origin: true, credentials: true }));
app.use('/', router)

const PORT = process.env.APP_PORT || 5000
app.listen(PORT , () => {
    console.log(`Server Started at ${PORT}`)
})
