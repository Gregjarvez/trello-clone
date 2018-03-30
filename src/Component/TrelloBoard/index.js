import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import uuid from 'shortid';
import './index.css';

@inject('store')
@observer
export default class TrelloBoard extends Component {
  state = {
    addListText: '',
  };

  onCategoryCreate = e => {
    e.preventDefault();

    if (!this.state.addListText.length) {
      return false;
    }

    const { store, match } = this.props;

    store.appendDeepChild(+match.params.id, {
      title: this.state.addListText,
      id: uuid.generate(),
      tasks: [],
    });
  };

  onAddListInputChange = ({ currentTarget }) => {
    this.setState({
      addListText: currentTarget.value,
    });
  };

  render() {
    const { store: { activeBoard } } = this.props;

    return activeBoard ? (
      <section>
        <h2 className="s-board--title"> {activeBoard.title} </h2>
        <div className="s-board--area">
          <ul className="list">
            {activeBoard.children.map(child => (
              <li key={child.id}>
                <form className="list--item-form">
                  <label htmlFor="board-item-list-input">{child.title}</label>
                  <hr />
                  {console.log(child)}
                  <input type="text" id="board-item-list-input" required />
                </form>
              </li>
            ))}
            <li>
              <form
                className="list--item-form extended"
                onSubmit={this.onCategoryCreate}
              >
                <input
                  type="text"
                  placeholder="add a list"
                  value={this.state.addListText}
                  onChange={this.onAddListInputChange}
                />
                {!this.state.addListText.length && (
                  <p role="label">give me a name</p>
                )}
              </form>
            </li>
          </ul>
        </div>
      </section>
    ) : null;
  }
}
