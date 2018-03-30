import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './home.css';
import Board from './card';

const Home = ({
   store: {
      getBoards,
      showBoard,
      currentBoardTitle,
      toggle,
      onBoardInputChange,
      onBoardCreate,
      isNullEntry,
   },
}) => (
   <div className="board--area">
      {!showBoard ? (
         <button className="create--board" onClick={toggle}>
            Create a new board....
         </button>
      ) : (
         <Board
            inputValue={currentBoardTitle}
            toggleBoard={toggle}
            onBoardInputChange={onBoardInputChange}
            onBoardCreate={onBoardCreate}
            isNullEntry={isNullEntry}
         />
      )}
      {getBoards.map(({ title, id }) => (
         <Link to={`/b/${id}`} key={id}>
            <div className="board--area_item">
               <h2> {title} </h2>
            </div>
         </Link>
      ))}
   </div>
);

export default inject('store')(observer(Home));
