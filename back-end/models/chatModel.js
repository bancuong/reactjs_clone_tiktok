//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin
const mongoose = require("mongoose");
const chatModel = mongoose.Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;