const { prisma } = require('../config/prisma')

//Get
const getAllcontact = async () => {
    try{
        const contact = await prisma.contact.findMany()
        return contact
    } catch (error){
        console.error(error);
        return error
    }
       
}

//Post
const createcontact = async (contact) => {
    try{
        const createdcontact = await prisma.contact.create({
            data: {
                email : contact.email,
                name : contact.name,
                message : contact.message,
            }
            })
        return createdcontact;
    } catch (error){
        console.error(error);
        return error
    }
}

module.exports =  { createcontact, getAllcontact }