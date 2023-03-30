export const getSender = (loggedUser, users) => {
  let result;
  // console.log(users, "users1");

  if (loggedUser && users && users.length && users.length > 1) {
    if (
      users[0] &&
      users[0]._id &&
      users[1] &&
      users[1].name &&
      loggedUser._id &&
      users[0]._id === loggedUser._id
    ) {
      result = users[1].name;
    } else if (users[0].name) {
      result = users[0].name;
    }
  }
  return result;
  // console.log(users[0].name);
  // console.log("===========");
  // return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  let result;
  // console.log(users, "users1");

  if (loggedUser && users && users.length && users.length > 1) {
    if (
      users[0] &&
      users[0]._id &&
      loggedUser._id &&
      users[0]._id === loggedUser._id
    ) {
      result = users[1];
    } else {
      result = users[0];
    }
  }
  return result;
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  ) {
    return 33;
  } else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  ) {
    return 0;
  } else {
    return "auto";
  }
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
