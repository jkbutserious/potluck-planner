import {Event} from '../src/eventObject.js';
import { User } from '../src/user-object.js';
import { AggregateUsers } from '../src/aggregateUsers.js';

describe("Event Object", ()=>{
  let reusableEvent;

  beforeEach(()=>{
    reusableEvent = new Event("This Event", "description of event", "Portland, OR", "07/06/2020 12:00PM");
  })

  test("create event Object", ()=>{
    expect(reusableEvent.eventName).toEqual("This Event");
    expect(reusableEvent.desc).toEqual("description of event");
    expect(reusableEvent.location).toEqual("Portland, OR");
    expect(reusableEvent.dateTime).toEqual("07/06/2020 12:00PM");
    expect(reusableEvent.attendees).toEqual([]);
  })

  test("add user object to the attendee array", ()=>{
    reusableEvent.addAttendee("newUser");
    expect(reusableEvent.attendees).toEqual(["newUser"]);
  })

  test("remove user object from the attendee array", ()=>{
    let userIndex = new AggregateUsers();
    let user1 = new User("testName", "testDesc", "testLocation");
    let user2 = new User("testName2", "testDesc2", "testLocation2");
    userIndex.addUser(user1);
    userIndex.addUser(user2);
    reusableEvent.addAttendee(user1);
    reusableEvent.addAttendee(user2);
    reusableEvent.removeAttendee(user1.id);
    expect(reusableEvent.attendees).toEqual([undefined, user2])
  })
})