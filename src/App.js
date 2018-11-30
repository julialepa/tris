import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      writeX: true,
      board: [
      ],
      showResetButton: false,
      winner: ''
    };

    for (let i = 0; i < 9; i++) {
      this.state.board.push(
        {
          inx: i,
          val: "",
        }
      );
    };
  };

  play(inx) {
    let text = this.state.writeX ? 'X' : 'O';
    const board = this.state.board;

    if (board[inx].val === 'X' || board[inx].val === 'O') {
      return  //NON FA NULLA
    }

    board[inx].val = text;

    if (
      (board[0].val === "X" && board[1].val === "X" && board[2].val === "X") ||
      (board[3].val === "X" && board[4].val === "X" && board[5].val === "X") ||
      (board[6].val === "X" && board[7].val === "X" && board[8].val === "X") ||
      (board[0].val === "X" && board[3].val === "X" && board[6].val === "X") ||
      (board[1].val === "X" && board[4].val === "X" && board[7].val === "X") ||
      (board[2].val === "X" && board[5].val === "X" && board[8].val === "X") ||
      (board[0].val === "X" && board[4].val === "X" && board[8].val === "X") ||
      (board[2].val === "X" && board[4].val === "X" && board[6].val === "X")
    ) {
     /* for (let i = 0; i < 9; i++) {
        board[i].val = ' '
        this.setState({
          board: board,
          writeX: true,
          showResetButton: true,
          winner: 'X'
        })
      }*/
      this.setState({
        showResetButton:true,
        winner: 'X'
      })
    }


    if (
      (board[0].val === "O" && board[1].val === "O" && board[2].val === "O") ||
      (board[3].val === "O" && board[4].val === "O" && board[5].val === "O") ||
      (board[6].val === "O" && board[7].val === "O" && board[8].val === "O") ||
      (board[0].val === "O" && board[3].val === "O" && board[6].val === "O") ||
      (board[1].val === "O" && board[4].val === "O" && board[7].val === "O") ||
      (board[2].val === "O" && board[5].val === "O" && board[8].val === "O") ||
      (board[0].val === "O" && board[4].val === "O" && board[8].val === "O") ||
      (board[2].val === "O" && board[4].val === "O" && board[6].val === "O")
    ) {
      this.setState({
        showResetButton:true,
        winner: 'O'
      })
    }


    this.setState({
      board: board,
      writeX: !this.state.writeX
    });


  };

  //FINE CONSTRUCTOR...

  render() {
    const turno = this.state.writeX ? "1" : "2";

    return (
      <div className="container">
         <h2>{this.state.writeX ? " tocca a  X" : "tocca a O"}</h2>
         <div>Turno: {turno}</div>
        <div className="board">
          {this.state.board &&
            this.state.board.map((item, index) => {
              return (
                <div key={index} onClick={() => { item.val === "" && this.play(index, item.val) }}>
                  {this.state.board[index].val}
                </div>
              )
            })
          }
        </div>
        {this.state.showResetButton && <button onClick={() => {
          const board = this.state.board
          for (let i = 0; i < 9; i++) {
            board[i].val = "";
            this.setState({
              board: board,
              writeX: true,
              showResetButton: false,
              winner: ''
            })
          }
        }}> reset
        </button>}
        {this.state.winner != '' && (<div className='stocastico'>{this.state.winner + ' is the winner'}</div>)}
      </div>
    );

  }
}

export default App;

