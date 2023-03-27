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
