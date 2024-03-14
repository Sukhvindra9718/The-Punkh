const { addVideo, getAllVideos,getVideo,deleteVideo } = require('../controllers/videoController')
const { videoUpload } = require('../middleware/videoUpload')

const router = require('express').Router()


router.post('/video/upload', videoUpload.single('video'), addVideo)
router.get('/videos', getAllVideos)
router.get('/video/:id', getVideo)
router.delete('/video/:id', deleteVideo)

module.exports = router