import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Board from './card';

class Home extends Component {
  state = {
    showBoard: false,
    currentBoardTitle: '',
    boards: [],
  };
  id = 100;

  toggleBoard = () => {
    this.setState(prevState => ({ showBoard: !prevState.showBoard }));
  };

  onBoardInputChange = ({ target: { value } }) => {
    this.setState({ currentBoardTitle: value });
  };

  onBoardCreate = () => {
    this.setState(
      prevState => ({
        boards: [...prevState.boards, { title: this.state.currentBoardTitle, id: ++this.id }],
      }),
      this.toggleBoard,
    );
  };

  render() {
    return (
      <div className="board--area">
        {!this.state.showBoard ? (
          <button className="create--board" onClick={this.toggleBoard}>
            Create a new board....
          </button>
        ) : (
          <Board
            inputValue={this.state.currentBoardTitle}
            toggleBoard={this.toggleBoard}
            onBoardInputChange={this.onBoardInputChange}
            onBoardCreate={this.onBoardCreate}
          />
        )}
        {this.state.boards.map(({ title, id }) => (
          <Link to={{ pathName: `/b/${id}`, state: { title, id } }}>
            <div className="board--area_item">
              <h2> {title} </h2>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
