// const User = require('../database/models/user.model');
const path = require('path');
const User = require(path.resolve(__dirname, '../database/models/user.model'));

exports.createUser = async (body) => {
  try {
    const user = await User.create({
      email: body.email,
      password: body.password,
      username: body.username,
    });
    return user;
  } catch (e) {
    throw e;
  }
};

exports.findUserPerEmail = (email) => {
  return User.findOne({ where: { email } });
};

exports.findUserPerId = (id) => {
  return User.findByPk(id);
};
