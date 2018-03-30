import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import uuid from 'shortid';
import './index.css';

@inject('store')
@observer
export default class TrelloBoard extends Component {
  componentWillMount() {
    const { store: { getBoards }, match: { params } } = this.props;
    this.activeBoard = getBoards.find(({ id }) => id === +params.id);
  }

  onCategoryCreate = e => {
    e.preventDefault();
    const child = {
      title: this.addListInput.value,
      id: uuid.generate(),
      tasks: [],
    };
    const { store: { appendDeepChild }, match: { params } } = this.props;
    appendDeepChild(+params.id, child);
    this.addListInput.value = ''
  };

  render() {
    return this.activeBoard ? (
      <section>
        <h2 className="s-board--title"> {this.activeBoard.title} </h2>
        <div className="s-board--area">
          <ul className="list">
            <li>
              <form className="list--item-form">
                <label htmlFor="board-item-list-input">
                  Child instance title
                </label>
                <hr />
                <input type="text" id="board-item-list-input" required />
              </form>
            </li>
            <li>
              <form
                className="list--item-form extended"
                onSubmit={this.onCategoryCreate}
              >
                <input
                  type="text"
                  placeholder="add a list"
                  ref={input => (this.addListInput = input)}
                />
                <p role="label">give me a name</p>
              </form>
            </li>
          </ul>
        </div>
      </section>
    ) : null;
  }
}
