// commonController.js

const pool = require('../db');
const uuid = require('uuid');


// Contact Us Form
const registerContactUs = async (req, res) => {
    try {
        // File upload
        const { name, email,phone,organisation,designation, message } = req.body;
        let id = uuid.v4();

        console.log(id,req.body);
        await pool.query('INSERT INTO contactus (id,name,email,phone,organisation,designation,message) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING *', [id,name, email,phone,organisation,designation,message]);
        res.status(201).json({success:true,msg:'Thank you for contacting us. We will get back to you soon.'});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
};

const getAllContactUs = async (req, res) => {
    try {
        const allContactUs = await pool.query('SELECT * FROM contactus');
        res.status(200).json({success:true,contacts:allContactUs.rows});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}

const getContactUsById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await pool.query('SELECT * FROM contactus WHERE id = $1', [id]);
        res.status(200).json({success:true,contact:contact.rows});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}

const deleteContactUs = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM contactus WHERE id = $1', [id]);
        res.status(200).json({success:true,msg:'Contact deleted successfully'});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}

const addKeyContact = async (req, res) => {
    try {
        const { name, email,phone,organisation,designation} = req.body;
        let id = uuid.v4();
        await pool.query('INSERT INTO keycontact (id,name,email,phone,organisation,designation) VALUES ($1, $2, $3,$4,$5,$6) RETURNING *', [id,name, email,phone,organisation,designation]);
        res.status(201).json({success:true,msg:'Thank you for contacting us. We will get back to you soon.'});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}

const getAllKeyContact = async (req, res) => {
    try {
        const allKeyContact = await pool.query('SELECT * FROM keycontact');
        res.status(200).json({success:true,keyContacts:allKeyContact.rows});
    }
    catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}

const getKeyContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const keyContact = await pool.query('SELECT * FROM keycontact WHERE id = $1', [id]);
        res.status(200).json({success:true,keyContact:keyContact.rows});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}

const deleteKeyContact = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM keycontact WHERE id = $1', [id]);
        res.status(200).json({success:true,msg:'Key Contact deleted successfully'});
    } catch (error) {
        res.status(500).send({success:false,userError:'Server Error',error:error.message});
    }
}








module.exports = {
    registerContactUs,
    getAllContactUs,
    getContactUsById,
    deleteContactUs,
    addKeyContact,
    getAllKeyContact,
    getKeyContactById,
    deleteKeyContact
};