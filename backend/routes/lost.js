const express = require('express')
const router = express.Router();

const {getAllLost, createLost, getSingleLost, updateLost, deleteLost} = require('../controllers/lost')

router.route('/').get(getAllLost)
router.route('/').post(createLost)
router.route('/:id').get(getSingleLost).patch(updateLost).delete(deleteLost)

module.exports = router