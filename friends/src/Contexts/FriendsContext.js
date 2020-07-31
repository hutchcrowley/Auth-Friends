import { createContext } from 'react'

const initState = {
	friends: [],
	password: '',
	username: '',
}

export const FriendsContext = createContext({ initState })
