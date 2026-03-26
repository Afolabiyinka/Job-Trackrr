import { Response } from "express";
import { AuthenticatedRequest } from "../types/request/types";
import { ContactPayload } from "../types/contact";
import { Contacts } from "../models/Contact";
import { User } from "../models/User";


const getContacts = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const contacts = await Contacts.findAll({
            where: { userId: userId },
            attributes: { exclude: ["userId"] }
        })
        return res.status(200).json(contacts)

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
}

const getParticularContact = async (req: AuthenticatedRequest, res: Response) => {
    const userid = req.user?.id
    const { id } = req.params
    if (!userid) return res.status(401).json({ message: "Unauthorised" })

    try {
        const contact = await Contacts.findByPk(id)
        res.status(200).json({ contact })
    } catch (err) {
        console.error(err)
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

const addContact = async (req: AuthenticatedRequest, res: Response) => {
    const userid = req.user?.id

    const { email, name, phoneNumber, role, socialLinks } = req.body as ContactPayload

    //Checking required fields

    if (!name) return res.status(400).json({ message: "Missing required fields" })
    try {
        const user = await User.findByPk(userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await Contacts.create({
            email, name, phoneNumber, role, socialLinks
        })
        return res.status(201).json({ message: "Contact added succesfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Something went wrong" })

    }

}

const deleteContact = async (req: AuthenticatedRequest, res: Response) => {

    const { id } = req.body
    if (!id) {
        return res.status(400).json({ message: "Id not provided" });
    }

    try {
        const contact = await Contacts.findByPk(id)
        if (!contact) return res.status(404).json({ message: "Contact not found" })

        await contact.destroy()
        res.status(200).json({ message: "Contact deleted" });

    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Smething went wrong" })
    }
}

const editContact = async (req: AuthenticatedRequest, res: Response) => {

    const { id } = req.params
    const { email, name, phoneNumber, role, socialLinks } = req.body as ContactPayload

    try {
        const contact = await Contacts.findByPk(id)
        if (!contact) return res.status(404).json({ message: "Contact not found" })

        await contact.update({
            email, name, phoneNumber, role, socialLinks
        })

        return res.status(200).json({ message: "Contact updated succesfully" })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Something went wrong" });

    }
}


export { getContacts, getParticularContact, addContact, deleteContact, editContact }