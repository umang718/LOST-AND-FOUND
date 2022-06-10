// const mongoose = require("mongoose");
// //  const uniqueValidator = require("mongoose-unique-validator");

// // var crypto = require("crypto");
// // var jwt = require("jsonwebtoken");
// // var secret = process.env.JWT_SECRET;
// const UserSchema = new mongoose.Schema(
//   {
//     first_name: {
//       type: String,
//       required: true,
//     },
//     last_name: String,
//     email: {
//       type: String,
//       required: [true, "can't be blank"],
//       match: [/.+\@.+\..+/, "is invalid"],
//       lowercase: true,
//       index: true,
//       unique: true,
//     },
//     username: {
//       type: String,
//       lowercase: true,
//       required: [true, "can't be blank"],
//       match: [/^[a-zA-Z0-9]+$/, "is invalid"],
//       index: true,
//       unique: true,
//     },

//     password: {
//       type: String,
//       required: true,
//     },
//     // avatar: String,
//     // timestamp: Date,
//   },
//   // { timestamps: true }
// );

// // UserSchema.plugin(uniqueValidator, {messaage: "This username is already taken."});
// //UserSchema.plugin(uniqueValidator, { message: "is already taken." });

// // UserSchema.methods.setPassword = function (password) {
// //   this.salt = crypto.randomBytes(16).toString("hex");
// //   this.hash = crypto
// //     .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
// //     .toString("hex");
// // };

// // UserSchema.methods.validPassword = function (password) {
// //   var hash = crypto
// //     .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
// //     .toString("hex");
// //   return this.hash === hash;
// // };

// // UserSchema.methods.generateJWT = function () {
// //   var today = new Date();
// //   var exp = new Date(today);
// //   exp.setDate(today.getDate() + 60);

// //   return jwt.sign(
// //     {
// //       id: this._id,
// //       username: this.username,
// //       exp: parseInt(exp.getTime() / 1000),
// //     },
// //     secret
// //   );
// // };

// // UserSchema.methods.toAuthJSON = function(){
// //       return {
// //         username: this.username,
// //         email: this.email,
// //         token: this.generateJWT(),
// //         bio: this.bio,
// //         image: this.image
// //       };
// //     };

// module.exports = mongoose.model("User", UserSchema);



const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)