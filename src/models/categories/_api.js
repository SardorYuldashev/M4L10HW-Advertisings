const { postCategory, getCategories, getCategory, patchCategory, deleteCategory } = require('./_controllers');

const router = require('express').Router();

router.post('/category', postCategory);
router.get('/category', getCategories);
router.get('/category/:id', getCategory);
router.patch('/category/:id', patchCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router;