const Joi = require('joi');

exports.postCategorySchema = {
  body: Joi.object({
    name: Joi.string().required().min(4),
  }),
};

exports.showCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer(),
  }),
};

exports.patchCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer(),
  }),
  body: Joi.object({
    name: Joi.string().required().min(4),
  }),
};

exports.deleteCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer(),
  }),
};