import React from 'react'
import '../App.css'

const Word = ({ theme, word }) => {

	return (
		<div>
			{
				word.split('').map(
					(letter, key) => {
						
						return <span id={key} className={`para ${theme ? "para-dark" : "para-light"}`}>
							{letter}
						</span>
					}
				)
			}
		</div>
	)
}

export default Word