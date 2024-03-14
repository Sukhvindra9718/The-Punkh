const pool = require('../db');
const fs = require('fs');
const uuid = require('uuid');


// Images CRUD
exports.addImage = async (req, res) => {
    try {
        const { title, description } = req.body;
        const imagePath = req.file.path;
        const filename = req.file.filename;
        const id = uuid.v4();
        await pool.query('INSERT INTO images (id,title,description,filename,imagePath) VALUES ($1, $2, $3,$4,$5) RETURNING *', [id, title, description, filename, imagePath]);

        res.status(200).json({
            success: true,
            message: 'Image Uploaded Succesfully',
        })
    } catch (error) {
        res.status(500).send({ success: false, userError: 'Server Error', error: error.message });
    }
}

exports.getAllImages = async (req, res) => {
    try {
        const images = await pool.query('SELECT * FROM images');
        res.status(200).json({
            success: true,
            images:images.rows
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Images fetch failed'
        })
    }
}

exports.getImage = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await pool.query('SELECT * FROM images WHERE id = $1', [id]);
        if(image.rows.length === 0) {
            return res.status(404).json({ success: false, msg: 'Image not found' });
        }
        res.status(200).json({
            success: true,
            image:image.rows[0]
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Image fetch failed'
        })
    }
}

exports.deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await pool.query('SELECT * FROM images WHERE id = $1', [id]);
        const imagePath = image.rows[0].videopath;
        fs.unlinkSync(imagePath);
        await pool.query('DELETE FROM images WHERE id = $1', [id]);
        res.status(200).json({
            success: true,
            message: 'Image Deleted Succesfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Image delete failed'
        })
    }
}