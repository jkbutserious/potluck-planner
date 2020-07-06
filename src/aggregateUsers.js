export class AggregateUsers {
  constructor() {
    this.users = [];
    this.currentId = 0;
  }

  addUser(user) {
    user.id = this.assignUserId();
    this.users.push(user);
  }

  assignUserId(){
    this.currentId += 1;
    return this.currentId;
  }
}