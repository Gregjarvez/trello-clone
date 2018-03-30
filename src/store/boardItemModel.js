import { observable } from 'mobx';

export default class BoardItemModel {
   @observable title;
   @observable children = [];

   constructor(title, id) {
      this.id = id;
      this.title = title;
   }
}
