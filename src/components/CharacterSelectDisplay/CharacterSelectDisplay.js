import React, {Component} from 'react';
import './CharacterSelectDisplay.css';

import CharacterSelect from '../CharacterSelect/CharacterSelect.js';

class CharacterSelectDisplay extends Component {

	constructor(props) {
		super(props);

		this.onCharSelect = this.onCharSelect.bind(this);

		this.state = { currentChar: null };

	}

	onCharSelect(charObj) {
		this.setState({ currentChar: charObj });
		if(this.props.onCharSelect) {
			this.props.onCharSelect(charObj);
		}
	}

	render() {

		let title;
		if(this.state.currentChar) {
			title = this.state.currentChar.title;
		}
		else {
			title = 'Please Choose A Character';
		}

		return (
			<div>
				<h1>{title}</h1>

				<CharacterSelect onCharSelect={charObj => this.onCharSelect(charObj)} />
			</div>
		);
	}

}

export default CharacterSelectDisplay;