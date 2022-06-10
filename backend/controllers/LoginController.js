//const Item = require("../models/User");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const bcrypt = require("bcryptjs");
const jwt =require('jsonwebtoken');

// exports.LoginController = {
//     // Return all the items.
//     index: (req, res) => {
//         //
//     }
// }

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = jwt.sign({ userId: user._id, name:user.name }, 'jwtSecret',{
    expiresIn:'30d', 
  })
  res.status(StatusCodes.CREATED).json({ user:{name: user.name },token })  
};

const login = async (req, res, next) => {

  const { email, password } = req.body

  if (!email || !password) {
    
    throw new BadRequestError('Please provide email and password')

  }

  const user = await User.findOne({ email })
  //console.log(user);
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
};

module.exports = {
  register,
  login,
};
