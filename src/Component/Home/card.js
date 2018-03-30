import React from 'react';
import Close from '../../closeIcon.e5ef77f2.svg'

const Board = ({
   toggleBoard,
   currentBoardTitle,
   onBoardInputChange,
   onBoardCreate,
   isNullEntry,
}) => (
  <div className="card">
    <section className="card--header">
      <h3>Creating a board</h3>
      <img src={Close} alt="close Icon" onClick={toggleBoard} />
    </section>
    <section className="card--body">
      <h4>what shall we call the board ?</h4>
      <div>
        <input
          type="text"
          value={currentBoardTitle}
          onChange={onBoardInputChange}
        />
        {isNullEntry && <p className="ops"> Oops! Looks like you forgot the name! </p>}
        <button className="button--cancel" onClick={toggleBoard}>
          Cancel
        </button>
        <button className="button--highlighted" onClick={onBoardCreate}>
          Create
        </button>
      </div>
    </section>
  </div>
);

export default Board;
