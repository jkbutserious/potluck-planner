import {AggregateEvents} from './../src/aggregateEvents.js';
import {Event} from './../src/eventObject.js'

describe('Aggregate Events and related object methods', ()=>{
  let reusableEventIndex;
  let reusableEvent;

  beforeEach(()=>{
    reusableEventIndex = new AggregateEvents;
    reusableEvent = new Event("This Event", "Tyson", "description of event", "Portland, OR", "07/06/2020 12:00PM");
  })

  test('create new AggregateEvents object', ()=>{
    expect(reusableEventIndex.events).toEqual([]);
    expect(reusableEventIndex.currentId).toEqual(0)
  })

  test('add event to AggregateEvents object', ()=>{
    reusableEventIndex.addEvent(reusableEvent);
    expect(reusableEventIndex.events).toEqual([reusableEvent]);
  })

  test('assigns id to event object when added to AggregateEvents', ()=>{
    reusableEventIndex.addEvent(reusableEvent);
    expect(reusableEvent.id).toEqual(1);
  })

  test('deletes event from AggregateEvents', ()=>{
    let reusableEvent2 = new Event("secondEvent", "Not Tyson", "description of second event", "Salem, OR", "07/06/2020 6:00PM");
    reusableEventIndex.addEvent(reusableEvent);
    reusableEventIndex.addEvent(reusableEvent2);
    reusableEventIndex.deleteEvent(reusableEvent.id);
    expect(reusableEventIndex.events).toEqual([undefined, reusableEvent2]);
  })
})