import { Router } from "express";
import { addContact, editContact, getContacts, getParticularContact } from "../controllers/contactsController";
import { deleteAccount } from "../controllers/userController";

import { deleteContact } from "../controllers/contactsController";

export const ContactRouter = Router();
ContactRouter.route("/").get(getContacts);
ContactRouter.route("/contact/:id").get(getParticularContact);
ContactRouter.route("/add").post(addContact);
ContactRouter.route("/edit/:id").put(editContact);
ContactRouter.route("/delete").delete(deleteContact);