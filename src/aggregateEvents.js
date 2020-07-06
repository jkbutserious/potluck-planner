export class AggregateEvents {
  constructor() {
    this.events = [];
    this.currentId = 0;
  }

  addEvent(event) {
    event.id = this.assignEventId()
    this.events.push(event);
  }

  assignEventId(){
    this.currentId += 1;
    return this.currentId;
  }

  deleteEvent(){
    
  }
}