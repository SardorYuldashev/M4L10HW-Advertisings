const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addAdvertising = require('./add-advertising');
const listAdvertisings = require('./list-advertisings');
const showAdvertising = require('./show-advertising');
const editAdvertising = require('./edit-advertising');
const removeAdvertising = require('./remove-advertising');
const {
  postAdvertisingSchema,
  showAdvertisingSchema,
  patchAdvertisingSchema,
  deleteAdvertisingSchema} = require('./_schemas');

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const postAdvertising = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAdvertisingSchema);

    const result = await addAdvertising(req.body);

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
const getAdvertisings = async (req, res, next) => {
  try {
    const result = await listAdvertisings(req.query);

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
const getAdvertising = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAdvertisingSchema);

    const result = await showAdvertising({ id: req.params.id });

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
const patchAdvertising = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchAdvertisingSchema);

    const result = await editAdvertising({ id: req.params.id, ...req.body });

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
const deleteAdvertising = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAdvertisingSchema);

    const result = await removeAdvertising(req.params);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postAdvertising,
  getAdvertisings,
  getAdvertising,
  patchAdvertising,
  deleteAdvertising
};