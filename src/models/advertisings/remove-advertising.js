const Advertising = require('./_Advertising');
const { NotFoundError } = require('../../shared/errors');

const removeAdvertising = async ({ id }) => {
  const advertising = await Advertising.findByPk(id);

  if (!advertising) {
    throw new NotFoundError('Reklama topilmadi');
  };

  deleted = await advertising.destroy();

  return { message: "Advertising deleted" };
};

module.exports = removeAdvertising;