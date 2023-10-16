import express from "express";
import cors from "cors";
import { getAllCustomers } from "./customers.js";

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000; // Default option if env isnt found

app.get("/", getAllCustomers)

app.listen(PORT, () => console.log("Listening at port: ", PORT))