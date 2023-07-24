const Advertising = require('./_Advertising');

const addAdvertising = async (body) => {
  const final_price = (body.start_price - ((body.start_price / 100) * body.discount));

  const result = await Advertising.create({ ...body, final_price });

  return result;
};

module.exports = addAdvertising;