export class AggregateUsers {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    user.id = this.assignUserId();
    this.users.push(user);
  }

  assignUserId(user){
    this.currentId += 1;
    return this.currentId;
  }
}