const { postAdvertising, getAdvertisings, getAdvertising, patchAdvertising, deleteAdvertising } = require('./_controllers');

const router = require('express').Router();

router.post('/advertising', postAdvertising);
router.get('/advertising', getAdvertisings);
router.get('/advertising/:id', getAdvertising);
router.patch('/advertising/:id', patchAdvertising);
router.delete('/advertising/:id', deleteAdvertising);

module.exports = router;