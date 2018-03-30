import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.css';

@inject('store')
@observer
export default class TrelloBoard extends Component {
   componentWillMount() {
      const { store: { getBoards }, match: { params } } = this.props;
      this.activeBoard = getBoards.find(({ id }) => id === +params.id);
      console.log(getBoards)
   }
   render() {
      return (
         <div className="board--area">
            {this.activeBoard && (
               <h1 className="board--title"> {this.activeBoard.title} </h1>
            )}
         </div>
      );
   }
}


