import React, { useState } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'

import { useHistory } from 'react-router-dom'

const initialFriend = {
	name: '',
	age: '',
	email: '',
}

const FriendForm = props => {
	let history = useHistory()

	const [ newFriend, setNewFriend ] = useState(initialFriend)

	const handleChange = e => {
		e.persist()
		let value = e.target.value
		console.log(value)
		setNewFriend({
			...newFriend,
			[e.target.name]: value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		axiosWithAuth()
			.post(`/api/friends`, newFriend)
			.then(res => {
				props.setFriends(res.data)
				history.push('/protected')
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='update-form'>
			<h2>Add New Friend!</h2>
			<form>
				<input
					className='update-input'
					type='text'
					name='name'
					value={newFriend.name}
					onChange={e => handleChange(e)}
					placeholder='name'
				/>

				<input
					className='update-input'
					name='age'
					value={newFriend.age}
					type='number'
					onChange={e => handleChange(e)}
					placeholder='age'
				/>
				<input
					className='update-input'
					name='email'
					value={newFriend.email}
					type='email'
					onChange={e => handleChange(e)}
					placeholder='email'
				/>
				<button className='md-button' onClick={e => handleSubmit(e)}>
					Add Friend
				</button>
			</form>
		</div>
	)
}

export default FriendForm
