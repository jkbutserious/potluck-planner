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

  deleteEvent(id){
    for(let i=0; i<this.events.length; i++){
      if(this.events[i]){
        if(this.events[i].id == id){
          delete this.events[i];
          return true;
        }
      }
    };
    return false;
  }
}