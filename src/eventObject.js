export class Event {
  constructor() {
    this.eventName = '';
    this.desc = '';
    this.location = '';
    this.dateTime = '';
    this.attendees = [];
  }

  addAttendee(user){
    this.attendees.push(user);
  }

  removeAttendee(userId){
    for(let i=0; i<this.attendees.length; i++){
      if(this.attendees[i]){
        if(this.attendees[i].id == userId){
          delete this.attendees[i];
          return true;
        }
      }
    };
    return false;
  }
}

