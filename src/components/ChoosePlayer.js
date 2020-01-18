import React from 'react';
import './ChoosePlayer.css'

class ChoosePlayer extends React.Component {

	handleForm = (e) => {
		e.preventDefault();
		this.props.player(e.target.player.value)
	}

	render() {
		return(
			<div>	
				<form onSubmit={(e) => this.handleForm(e)} >
					Choose Player:
					<label>
						X
						<input type="radio" name="player" value="X"/>
					</label>
					<label>
						O
						<input type="radio" name="player" value="O"/>
					</label>
					<input type="submit" value="Start" />
				</form>
			</div>
		)
	}
}

export default ChoosePlayer;