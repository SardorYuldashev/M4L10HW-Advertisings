const Category = require('./_Category');
const { NotFoundError } = require('../../shared/errors');

const removeCategory = async ({ id }) => {
  const category = await Category.findByPk(id);

  if (!category) {
    throw new NotFoundError('Kategoriya topilmadi');
  };

  deleted = await category.destroy();

  return { message: "Category deleted" };
};

module.exports = removeCategory;