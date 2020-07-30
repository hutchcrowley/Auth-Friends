import { createContext } from "react";

const initState = {
  friends: [],
  password: "",
  username: "",
  isLoading: null
};

export const FriendsContext = createContext({ initState });
