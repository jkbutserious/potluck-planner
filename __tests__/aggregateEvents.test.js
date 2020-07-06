import {AggregateEvents} from './../src/aggregateEvents.js';
import {Event} from './../src/eventObject.js'
import { User } from '../src/user-object.js';
import { AggregateUsers } from '../src/aggregateUsers.js';

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
    let event2 = new Event("secondEvent", "Not Tyson", "description of second event", "Salem, OR", "07/06/2020 6:00PM");
    reusableEventIndex.addEvent(reusableEvent);
    reusableEventIndex.addEvent(event2);
    reusableEventIndex.deleteEvent(reusableEvent.id);
    expect(reusableEventIndex.events).toEqual([undefined, event2]);
  })

  test('remove user from all events',()=>{
    let user = new User("testName", "testDesc", "testLocation");
    let event2 = new Event("secondEvent", "Not Tyson", "description of second event", "Salem, OR", "07/06/2020 6:00PM");
    let aggregateUser = new AggregateUsers();
    aggregateUser.addUser(user);
    event2.addAttendee(user);
    reusableEvent.addAttendee(user);
    reusableEventIndex.addEvent(reusableEvent);
    reusableEventIndex.addEvent(event2);
    reusableEventIndex.scrubUser(user.id);
    expect(reusableEvent.attendees).toEqual([]);
    expect(event2.attendees).toEqual([]);
  })
})