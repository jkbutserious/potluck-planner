export class Event {
  constructor(eventName, creator, desc, location, dateTime) {
    this.eventName = eventName
    this.creator = creator;
    this.desc = desc;
    this.location = location;
    this.dateTime = dateTime;
    this.attendees = [creator];
  }

  addNewUser(user){
    
  }
}

