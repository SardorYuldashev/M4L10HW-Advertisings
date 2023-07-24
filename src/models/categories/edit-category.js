const Category = require('./_Category');
const { NotFoundError } = require('../../shared/errors');

const editCategory = async ({ id, ...body }) => {
  const category = await Category.findByPk(id);

  if (!category) {
    throw new NotFoundError('Kategoriya topilmadi');
  };

  const result = await category.update(body);

  return result;
};

module.exports = editCategory;