import {observable } from 'mobx';

export default class ChildCategoryModel {
   @observable tasks = [];

   constructor ({title , id , tasks }) {
      this.title = title;
      this.id = id;
      this.tasks = tasks;
   }
}
