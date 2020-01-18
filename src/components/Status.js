import React from 'react';
import ChoosePlayer from './ChoosePlayer';

class Status extends React.Component {

	handleSetPlayer = (e) => {
		this.props.setPlayer(e)
	}

	rederContent() {
		if(this.props.winner) {
			return(
				<h2>Winner is {this.props.winner}</h2>
			)
		} else {
			return(
				this.props.player ? 
					<h2>Next player is: {this.props.player}</h2> : 
					<h2><ChoosePlayer player={(e) => this.handleSetPlayer(e)}/></h2>
			)
		}
	}

	render() {
		return (
			<div>
				{this.rederContent()}
			</div>
		)
	}
}

export default Status;