const {addImage,getAllImages,getImage,deleteImage } = require('../controllers/imageController')
const { imageUpload } = require('../middleware/imageUpload')

const router = require('express').Router()


router.post('/image/upload', imageUpload.single('image'), addImage).get('/images', getAllImages).get('/image/:id', getImage).delete('/image/:id', deleteImage)

module.exports = router