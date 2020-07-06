export class AggregateEvents {
  constructor() {
    this.events = [];
  }

  addEvent(event) {
    this.events.push(event);
  }
}