import React from 'react'

const NoMatch = () => (
	<div className='noRoute'>
		<img className='leblanc' src={require('../Assets/SillyLeBlanc.jpg')} alt='whoops' />
		<h2>404</h2>
		<h3>page not found</h3>
		<h4>We are sorry but the page you are looking for does not exist.</h4>
	</div>
)

export default NoMatch
