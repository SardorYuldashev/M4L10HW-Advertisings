const Category = require('./_Category');

const addCategory = async (body) => {
  const result = await Category.create(body);

  return result;
};

module.exports = addCategory;