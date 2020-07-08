export class AggregateUsers {
  constructor() {
    this.users = [];
    this.currentId = -1;
    this.currentUser = null;
  }

  addUser(user) {
    user.id = this.assignUserId();
    this.users.push(user);
  }

  assignUserId(){
    this.currentId += 1;
    return this.currentId;
  }

  deleteUser(id){
    for(let i=0; i<this.users.length; i++){
      if(this.users[i]){
        if(this.users[i].id == id){
          delete this.users[i];
          return true;
        }
      }
    }
    return false;
  }
}