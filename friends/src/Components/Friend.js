import React from 'react'

import { axiosWithAuth } from './utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Friend = (props) => {
	let history = useHistory()
	console.log(history)

	let id = props.id

	const deleteFriend = (e) => {
		console.log('FROM Friend: ', id)
		e.preventDefault()
		axiosWithAuth()
			.delete(`/api/friends/${id}`)
			.then((response) => {
				console.log(response.data)
				props.setFriends(response.data)
				history.push('/protected')
			})
			.catch((err) => console.log(err))
	}

	const routeToUpdate = (e) => {
		e.preventDefault()
		history.push(`/edit-friend/${id}`)
	}

	const routeToAdd = (e) => {
		e.preventDefault()
		history.push('/add-friend')
	}

	return (
		<div className='friend-card'>
			<h1>{props.name}</h1>
			<h2>{props.age}</h2>
			<h2>{props.email}</h2>

			<button className='md-button' onClick={routeToUpdate}>
				Edit
			</button>
			<button className='md-button' onClick={deleteFriend}>
				Delete
			</button>
			<button className='md-button' onClick={routeToAdd}>
				Add
			</button>
		</div>
	)
}

export default Friend
