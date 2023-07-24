const Advertising = require('./_Advertising');
const Category = require('../categories/_Category');
const { NotFoundError } = require('../../shared/errors');

const showAdvertising = async ({ id }) => {
  const result = await Advertising.findByPk(id, {include: Category});

  if (!result) {
    throw new NotFoundError('Reklama topilmadi');
  };

  return result;
};

module.exports = showAdvertising;