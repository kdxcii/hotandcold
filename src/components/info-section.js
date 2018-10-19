import React from 'react';

import './info-section.css';

export default function InfoSection(props){
	return (
		<section id="what" tabIndex="-1">
			<h2>What do I do?</h2>
			<p>this is a Hot or Cold Number Guessing game. The Game goes like this:</p>
			<ol>
				<li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
				<li>You need to guess until you can find the hidden secret number</li>
				<li>You will get feedback on how close("hot") or far("cold") your guess is.</li>
			</ol>
		</section>
	);
}