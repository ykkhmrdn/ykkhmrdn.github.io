const contactService = require('../services/contactService')

//Get
const getAllcontact = async (req, res) =>{
    try {
        const contact = await contactService.getAllcontact()
        res.status(200).json({
        message: "Sukses Mengambil Input contact",
        data: contact
    })
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Post
const createcontact =  async(req,res) => {
    try {
        const contact = await contactService.createcontact(req.body);
        res.status(201).json({ contact });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = { createcontact, getAllcontact }