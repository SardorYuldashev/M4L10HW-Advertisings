const Joi = require('joi');
const { BadReqqustError } = require('../errors');

/**
 * @param {{ body, params, query }} params
 * @param {{ body: Joi.Schema, params: Joi.Schema, query: Joi.Schema }} schema
 * @returns
 */
const httpValidator = ({ body, params, query }, schema) => {
  if (body) {
    const { error } = schema.body.validate(body);

    if (error) throw new BadReqqustError(error);
  }
  if (params) {
    const { error } = schema.params.validate(params);

    if (error) throw new BadReqqustError(error);
  }
  if (query) {
    const { error } = schema.query.validate(query);

    if (error) throw new BadReqqustError(error);
  }
};

module.exports = httpValidator;