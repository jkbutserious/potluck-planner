export class Event {
  constructor(eventName, creator, desc, location, dateTime) {
    this.eventName = eventName
    this.creator = creator;
    this.desc = desc;
    this.location = location;
    this.dateTime = dateTime;
    this.attendees = [creator];
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

