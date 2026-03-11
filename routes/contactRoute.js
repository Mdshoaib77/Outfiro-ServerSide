// import express from "express"
// import { addContact } from "../controllers/contactController.js"

// const contactRouter = express.Router()

// contactRouter.post("/add", addContact)

// export default contactRouter


import express from "express"
import { addContact, getContacts } from "../controllers/contactController.js"
import adminAuth from "../middleware/adminAuth.js"

const contactRouter = express.Router()

contactRouter.post("/add", addContact)

/* ADMIN CONTACT LIST */
contactRouter.get("/list", adminAuth, getContacts)

export default contactRouter