const registerValidator = require("../validators/registerValidator");
const User = require("../model/User");
//login controller
module.exports = {
  login(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    res.json({
      message: "Login Successful",
      Name: name,
      Email: email,
    });
  },
  register(req, res) {
    //read user data
    let { name, email, password } = req.body;
    //validation
    let validate = registerValidator({ name, email, password });

    if (!validate.isValid) {
      res.status(400).json(validate.error);
    } else {
      console.log(email);
      User.findOne(email, (err, user) => {
        if (err) {
          res.status(400).json({
            message: err,
          });
        } else {
          res.status(200).json({
            message: "Success",
          });
        }
      });
      // User.findOne({ email })
      //   .then((user) => {
      //     console.log(user);
      //     if (user) {
      //       res.status(400).json({
      //         message: "Email Already Exist",
      //       });
      //     } else {
      //       res.status(200).json({
      //         message: "Account Created",
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     res.status(500).json({
      //       message: "Server Error Occurred",
      //     });
      //   });
      // res.status(200).json({
      //   message: "Account Created",
      // });
    }
    //check for duplicate user
    //new user object
    //save to database
    //response back with new data
  },
};
