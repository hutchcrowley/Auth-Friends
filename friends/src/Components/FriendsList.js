import React, { useContext } from 'react'

import Friend from './Friend'
import Spinner from './Spinner'
import Header from './Header'

import { FriendsContext } from '../Contexts/FriendsContext'

const FriendsList = () => {
	const { friends, isLoading, setFriends } = useContext(FriendsContext)

	return (
		<div className='friends-list-wrapper'>
			<Header />
			{!isLoading ? (
				<ol className='friends-list'>
					{friends.map(friend => (
						<FriendsContext.Provider value={{ friend }}>
							<Friend
								key={friend.id}
								id={friend.id}
								name={friend.name}
								age={friend.age}
								email={friend.email}
								setFriends={setFriends}
							/>
						</FriendsContext.Provider>
					))}
				</ol>
			) : (
				<Spinner />
			)}
		</div>
	)
}

export default FriendsList
