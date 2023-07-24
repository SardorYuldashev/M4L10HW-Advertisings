const Joi = require('joi');

exports.postAdvertisingSchema = {
  body: Joi.object({
    title: Joi.string().required().min(5),
    category_id: Joi.number().integer().required(),
    description: Joi.string().min(5),
    store_name: Joi.string().required(),
    start_price: Joi.number().required(),
    discount: Joi.number().integer().required(),
    promo_code: Joi.string(),
    url: Joi.string().required(),
    img: Joi.string(),
  }),
};

exports.showAdvertisingSchema = {
  params: Joi.object({
    id: Joi.number().integer(),
  }),
};

exports.patchAdvertisingSchema = {
  params: Joi.object({
    id: Joi.number().integer(),
  }),
  body: Joi.object({
    title: Joi.string().min(5),
    category_id: Joi.number().integer(),
    description: Joi.string().min(5),
    store_name: Joi.string(),
    start_price: Joi.number(),
    discount: Joi.number().integer(),
    promo_code: Joi.string(),
    url: Joi.string(),
    img: Joi.string(),
  }),
};

exports.deleteAdvertisingSchema = {
  params: Joi.object({
    id: Joi.number().integer(),
  }),
};