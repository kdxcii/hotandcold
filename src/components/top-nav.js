import React from 'react';

import './top-nav.css'

export default function TopNav(props) {
	return (
		<nav>
			<ul className="clear-fix">
				<li>
					<a 
						href="#what"
						className="what"
						aria-label="How to play"
						>
							What?
						</a>
				</li>
				<li>
				<a	href="#what"
					className="what"
					aria-label="Start a new game"
					onClick={() => props.onRestartGame()}
					>
					 	+ New Game
					</a>
				</li>
			</ul>
		</nav>
	)
}