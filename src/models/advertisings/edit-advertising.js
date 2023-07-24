const Advertising = require('./_Advertising');
const { NotFoundError } = require('../../shared/errors');

const editAdvertising = async ({ id, ...body }) => {
  const advertising = await Advertising.findByPk(id);

  if (!advertising) {
    throw new NotFoundError('Reklama topilmadi');
  };

  let final_price;

  if (body.start_price && body.discount) {
    final_price = (body.start_price - ((body.start_price / 100) * body.discount));
  } else if (body.start_price && !body.discount) {
    final_price = (body.start_price - ((body.start_price / 100) * advertising.discount));
  } else if (!body.start_price && body.discount) {
    final_price = (advertising.start_price - ((advertising.start_price / 100) * body.discount));
  }

  const result = await advertising.update({ ...body, final_price });

  return result;
};

module.exports = editAdvertising;