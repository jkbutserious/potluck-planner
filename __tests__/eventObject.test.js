import {Event} from '../src/eventObject.js';

describe("Event Object", ()=>{
  let reusableEvent;

  beforeEach(()=>{
    reusableEvent = new Event("This Event", "Tyson", "description of event", "Portland, OR", "07/06/2020 12:00PM");
  })

  test("create event Object", ()=>{
    expect(reusableEvent.eventName).toEqual("This Event");
    expect(reusableEvent.creator).toEqual("Tyson");
    expect(reusableEvent.desc).toEqual("description of event");
    expect(reusableEvent.location).toEqual("Portland, OR");
    expect(reusableEvent.dateTime).toEqual("07/06/2020 12:00PM");
    expect(reusableEvent.attendees).toEqual(["Tyson"]);
  })

  test("add user object to the attendee array", ()=>{
    reusableEvent.addAttendee("newUser");
    expect(reusableEvent.attendees).toEqual(["Tyson", "newUser"]);
  })

  //test("remove user object to the attendee array", ()=>{
  //})
})