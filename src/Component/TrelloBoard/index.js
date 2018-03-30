import React, { Component } from 'react';

 class TrelloBoard extends Component {
   componentDidMount() {
      console.log('hello')
   }
   render() {
      return (
        <div className="trello--instance">
           {console.log(this.props)}
        </div>
      )
   }
}

export default TrelloBoard;
