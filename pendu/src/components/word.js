import React from 'react'
import '../App.css'

const Word = ({ theme, word }) => {

	return (
		<div>
			{
				word.toLowerCase().split('').map(
					(letter, key) => {
						
						return <span id={key} className={`para ${theme ? "para-dark" : "para-light"} letter_${letter}`}>&nbsp;?&nbsp;</span>
					}
				)
			}
		</div>
	)
}

export default Word