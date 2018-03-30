import { action, autorun, computed, observable, toJS } from 'mobx';
import BoardItemModel from './boardItemModel';

class BoardStore {
   @observable boards = [];
   @observable showBoard = false;
   @observable currentBoardTitle = '';
   @observable isNullEntry = false;

   constructor() {
      autorun(() => {
         this.isNullEntry = !this.currentBoardTitle.length;
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
}

export default new BoardStore();
