import React from 'react';
import '../App.css'
import Square from './square'

class Board extends React.Component {
    calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log('winner is ' + squares[a]);
            return squares[a];
          }
        }
        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }
    
    renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
    }

    resetGame = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        })
    }

    handleClick = (index) => {
        const squares = this.state.squares.slice();
        if (squares[index]) {
            return
        }

        squares[index] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });    
    }

    congratulations = (player) => {
        alert('Winner is: ' + player);
    }

    render(){
        let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <h2> {status} </h2>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>                
            </div>
        )
    }

    componentDidMount(){
        console.log('calc winner');
        const winner = this.calculateWinner(this.state.squares);
        if (winner) {
            this.congratulations(winner);  
            this.resetGame();
        }
    }
}

export default Board;