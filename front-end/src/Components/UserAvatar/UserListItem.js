import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      background={"#E8E8E8"}
      _hover={{
        background: "#38B2Ac",
        color: "white",
      }}
      width="100%"
      display={"flex"}
      alignItems="center"
      color={"black"}
      paddingX={3}
      paddingY={2}
      marginBottom={2}
      borderRadius="lg"
    >
      <Avatar
        marginRight={2}
        size="sm"
        corsor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize={"xs"}>
          <b>Email: </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
