import React from 'react';
import './App.css';
import ChoosePlayer from './components/ChoosePlayer';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			board: Array(9).fill(null),
			player: null,
			winner: null,
		}
	}

	checkWinner = () => {
		let winLines = 
			[
				["0", "1", "2"],
				["3", "4", "5"],
				["6", "7", "8"],
				["0", "3", "6"],
				["1", "4", "7"],
				["2", "5", "8"],
				["0", "4", "8"],
				["2", "4", "6"]
			]

		for(let i = 0; i < winLines.length; i++) {
			const [a, b, c] = winLines[i]
			if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
				alert('You Won!');
				this.setState({
					winner: this.state.player
				})
			}
		}			
	}

	handleClick = (index) => {
		if (this.state.player && !this.state.winner) {
			let newBoard = this.state.board
			if(this.state.board[index] === null) {
				newBoard[index] = this.state.player
				this.setState({
					board: newBoard,
					player: this.state.player === "X" ? "O" : "X"
				})

				this.checkWinner()
			}
		}
	}

	setPlayer = (player) => {
		this.setState({ player })
	}

	render() {
		const allBoxes = this.state.board.map(
			(box, index) => 
			<div 
				className="box" 
				key={index} 
				onClick={() => this.handleClick(index)}>
					{box}
			</div>)

		let showChoosePlayer = this.state.player ? <h2>Next player is: {this.state.player}</h2> : <h2><ChoosePlayer player={(e) => this.setPlayer(e)}/></h2>

		return (
			<div className="container">
				<h1>Tic Tac Toe App</h1>
				{showChoosePlayer}
				<div className="board">
					{allBoxes}
				</div>
			</div>
		)
	}
}

export default App;