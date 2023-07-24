const Category = require('./_Category');
const { NotFoundError } = require('../../shared/errors')

const showCategory = async ({ id }) => {
  const result = await Category.findByPk(id);

  if (!result) {
    throw new NotFoundError('Kategoriya topilmadi');
  };

  return result;
};

module.exports = showCategory;