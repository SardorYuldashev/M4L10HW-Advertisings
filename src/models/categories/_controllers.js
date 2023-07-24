const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addCategory = require('./add-category');
const listCategories = require('./list-categoris');
const showCategory = require('./show-category');
const editCategory = require('./edit-category');
const removeCategory = require('./remove-categor');
const {
  postCategorySchema,
  showCategorySchema,
  patchCategorySchema,
  deleteCategorySchema
} = require('./_schemas');

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const postCategory = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postCategorySchema);

    const result = await addCategory(req.body);

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getCategories = async (req, res, next) => {
  try {
    const result = await listCategories();

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showCategorySchema);

    const result = await showCategory({ id: req.params.id });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const patchCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchCategorySchema);

    const result = await editCategory({ id: req.params.id, ...req.body });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const deleteCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteCategorySchema);

    const result = await removeCategory(req.params);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postCategory,
  getCategories,
  getCategory,
  patchCategory,
  deleteCategory
};