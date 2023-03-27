const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !password || !email) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Fail to create new user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, "email");
  // console.log(password, "password");
  const user = await User.findOne({ email });
  if (user) {
    const isMatch = await user.matchPassword(password);
    if (isMatch) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Wrong email or password");
    }
  } else {
    res.status(400);
    throw new Error("Wrong email or password");
  }
});

//api/user?search=chubedan
const allUser = asyncHandler(async (req, res) => {
  const user = req.user;
  // console.log(req.user._id);
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  // const users = await User.find(...keyword, { _id: { $ne: req.user._id } });
  // const users = await User.find(keyword).find({ _id: { $ne: req.user._id } }); // cant find id
  const users = await User.find({ ...keyword, _id: { $ne: user._id } }); // without account id
  return res.send(users);
});

module.exports = { registerUser, authUser, allUser };
