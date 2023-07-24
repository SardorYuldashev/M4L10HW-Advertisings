const Category = require('./_Category');

const listCategories = async () => {
  const result = await Category.findAll();

  return result;
};

module.exports = listCategories;