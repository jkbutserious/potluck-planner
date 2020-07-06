export class Event {
  constructor(creator, desc, location, dateTime) {
    this.creator = creator;
    this.desc = desc;
    this.location = location;
    this.dateTime = dateTime;
    this.attendees = [creator]
  }
}