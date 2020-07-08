export class Event {
  constructor(eventName, desc, location, dateTime) {
    this.eventName = eventName
    this.desc = desc;
    this.location = location;
    this.dateTime = dateTime;
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

