import React, {Component} from 'react';
import './CharacterSelect.css';

import SAMPLE_DATA from '../../res/sampledata.json';

const characterList = ['akuma', 'alisa', 'anna', 'asuka', 'bob', 'bryan', 'claudio', 'devil-jin', 'dragunov', 'eddy',
'eliza', 'feng', 'geese', 'gigas', 'heihachi', 'hwoarang', 'jack-7', 'jin', 'josie', 'katarina', 'kazumi', 'kazuya',
'king', 'kuma', 'lars', 'law', 'lee', 'lei', 'leo', 'lili', 'lucky-chloe', 'master-raven', 'miguel', 'nina', 'noctis',
'paul', 'shaheen', 'steve', 'xiaoyu', 'yoshimitsu'];




class CharacterSelect extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			selectedCharacter: null
		};

		this.onIconClick = this.onIconClick.bind(this);
	}

	onIconClick(charName) {
		this.setState({selectedCharacter: charName});
		if(this.props.onCharSelect) {
			this.props.onCharSelect(SAMPLE_DATA[charName]);
		}
	}

	buildListItemArray() {
		const list = characterList.map(charName => {

			let className = 'char-select-icon';
			if(charName == this.state.selectedCharacter) {
				className += ' selected';
			}

			return (
				<li onClick={(e) => this.onIconClick(charName)} className={className} style={{backgroundImage: 'url(/res/charicons/' + charName + '.jpg)'}} />
			);
		});

		return list;
	}

	render() {
		const listItems = this.buildListItemArray();

		return (
			<ul className='char-select'>
				{listItems}
			</ul>
		);	
	}
}

export default CharacterSelect;