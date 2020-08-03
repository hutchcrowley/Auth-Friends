import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'
import ProtectedRoute from './Components/utils/ProtectedRoute'
import FriendsList from './Components/FriendsList'
import FriendForm from './Components/FriendForm'
import UpdateForm from './Components/UpdateForm'
import NoMatch from './Components/NoMatch'
import Header from './Components/Header'

import { axiosWithAuth } from './Components/utils/axiosWithAuth'

import { FriendsContext } from './Contexts/FriendsContext'

import './App.css'

// This component is handling all of the Navigation and routing for the application. It's sole purpose is to set the URL paths and render components based upon URL input.

const App = () => {
	// create a state variable to hold the array of friends returned from the initial GET request to the API
	const [ friends, setFriends ] = useState([])

	// create a boolean variable to determine whether or not to display a loading screen, initialize to false.
	const [ isLoading, setIsLoading ] = useState(false)

	// useEffect hook that will make a GET request for the list of friends every time the page is rendered. Also, success or failure of API request will trigger the loading screen or turn it off
	useEffect(() => {
		axiosWithAuth()
			.get(`/api/friends`)
			.then(setIsLoading(true))
			.then(res => {
				console.log('response from API call: ', res.data)
				setFriends(res.data)
				setIsLoading(false)
			})
			.catch(err => console.log(err))
	}, [])

	// If isLoading variable is false, the API request was successful, and the friends list will be populated and displayed here.
	return (
		<FriendsContext.Provider value={{ friends, setFriends, isLoading }}>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<ProtectedRoute path='/protected' component={FriendsList} />
					<Route path='/login' component={Login} />
					<Route path='/add-friend'>
						<FriendForm setFriends={setFriends} />
					</Route>
					<Route
						path='/edit-friend/:id'
						render={props => <UpdateForm {...props} friends={friends} setFriends={setFriends} />}
					/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		</FriendsContext.Provider>
	)
}
export default App
