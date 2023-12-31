const Category = require('../categories/_Category');
const Advertising = require('./_Advertising');

const listAdvertisings = async () => {
  const result = await Advertising.findAll({
    include: Category,
    attributes: {
      exclude: ['url', 'img', 'category_id', 'description', 'promo_code']
    }
  });

  return result;
};

module.exports = listAdvertisings;