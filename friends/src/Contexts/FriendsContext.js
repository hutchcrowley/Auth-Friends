import { createContext } from './node_modules/react'

const initState = {
	friends: [],
	password: '',
	username: '',
	isLoading: false,
	isLoggedIn: false,
}

export const FriendsContext = createContext({ initState })
