import { action, autorun, computed, observable, toJS } from 'mobx';
import BoardItemModel from './boardItemModel';
import ChildCategoryModel from './childModel';

class BoardStore {
  @observable boards = [];
  @observable showBoard = false;
  @observable currentBoardTitle = '';
  @observable isNullEntry = false;
  @observable activeBoard = null;

  constructor() {
    autorun(() => {
      this.isNullEntry = !this.currentBoardTitle.length;
      console.log(toJS(this.boards));
      console.log(toJS(this.activeBoard));
    });
  }

  @action
  toggle = () => {
    this.showBoard = !this.showBoard;
    this.currentBoardTitle = '';
  };

  @action
  onBoardCreate = () => {
    if (this.isNullEntry) {
      return;
    }

    this.boards.push(new BoardItemModel(this.currentBoardTitle, Date.now()));
    this.toggle();
  };

  @action
  onBoardInputChange = ({ target: { value } }) => {
    this.currentBoardTitle = value;
  };

  @computed
  get getBoards() {
    return toJS(this.boards);
  }

  @action
  setActiveBoards = id => {
    this.activeBoard = this.boards.find(board => board.id === id);
  };

  @action
  appendDeepChild = (id, payload) => {
    const childIndex = this.boards.findIndex(board => board.id === id);
    if (!~childIndex) return;

    this.boards[childIndex].children.push(new ChildCategoryModel(payload));
  };
}

export default new BoardStore();
