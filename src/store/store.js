import { action, autorun, computed, observable } from 'mobx';

class BoardStore {
   @observable boards = [];
   @observable showBoard = false;
   @observable currentBoardTitle = '';
   @observable isNullEntry = false;

   constructor() {
      autorun(() => {
         this.isNullEntry = !this.currentBoardTitle.length
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

      this.boards.push({
         title: this.currentBoardTitle,
         id: Date.now(),
      });
      this.toggle();
   };

   @action
   onBoardInputChange = ({ target: { value } }) => {
      this.currentBoardTitle = value;
   };

   @computed
   get getBoards() {
      return this.boards.toJS();
   }
}

export default new BoardStore();
