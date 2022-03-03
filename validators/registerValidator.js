const validator = require("validator");

const validate = (user) => {
  let error = {};
  if (!user.name) {
    error.name = "Please Provide Your Name";
  }
  if (!user.email) {
    error.email = "Please Provide Your Email";
  } else if (!validator.isEmail(user.email)) {
    error.email = "Please Provide Valid Email";
  }
  if (!user.password) {
    error.password = "Please Provide a Password";
  } else if (user.password.length < 6) {
    error.password = "Password Length Must be 6 or Greater";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

module.exports = validate;
