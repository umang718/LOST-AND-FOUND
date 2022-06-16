const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const bcryptjs = require("bcryptjs");
const jwt =require('jsonwebtoken');

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = jwt.sign({ userId: user._id, name:user.name }, 'jwtSecret',{
        expiresIn:'30d', 
    })
    res.status(StatusCodes.CREATED).json({ user:{name: user.name },token });
};

const securePassword = async (password)=>{
    try {
        const passwordHash = await bcryptjs.hash(password, 10);
        return passwordHash;
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
}

const login = async (req, res, next) => {

    const { email, password } = req.body

    if (!email || !password) {
        next(new BadRequestError('Please provide email and password'));
        return;
    }

    const user = await User.findOne({ email })
    if (!user) {
        next(new UnauthenticatedError('Invalid Credentials'));
        return;
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        next(new UnauthenticatedError('Invalid Credentials'));
        return;
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
};

module.exports = {
    register,
    securePassword,
    login,
};