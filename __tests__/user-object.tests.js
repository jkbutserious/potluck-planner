import { User } from '../src/user-object.js';
import { Recipe } from '../src/recipe-object.js';
import { Event } from '../src/eventObject.js';

describe('should include all tests related to the user object', () => {
  let userObject;
  let recipe;
  let reusableEvent;

  beforeEach(() => {
    const description = "Likes long walks on the beach"
    userObject = new User("Kyle", description, "Portland, OR");
    recipe = new Recipe("pot Roast");
    reusableEvent = new Event("This Event", "description of event", "Portland, OR", "07/06/2020 12:00PM");
  });

  test('should properly instantiate new user object', () => {
    expect(userObject.name).toEqual("Kyle");
    expect(userObject.recipes).toEqual([]);
    expect(userObject.aboutMe).toEqual("Likes long walks on the beach");
    expect(userObject.location).toEqual("Portland, OR");
  });

  test('add a new recipe to the user object', () => {
    userObject.addRecipe(recipe);
    expect(userObject.recipes).toEqual([recipe]);
  });

  test('assigns id to recipe object when added to user object', ()=>{
    userObject.addRecipe(recipe);
    expect(recipe.id).toEqual(1);
  })

  test("remove recipe object from the user array", ()=>{
    let recipe2 = new Recipe("pizza");
    userObject.addRecipe(recipe);
    userObject.addRecipe(recipe2);
    userObject.removeRecipe(recipe.id);
    expect(userObject.recipes).toEqual([undefined, recipe2])
  })

  test('add event to User object', ()=>{
    userObject.addEvent(reusableEvent);
    expect(userObject.events).toEqual([reusableEvent]);
  })

  test('assigns id to event object when added to User', ()=>{
    userObject.addEvent(reusableEvent);
    expect(reusableEvent.id).toEqual(1);
  })

  test('deletes event from User', ()=>{
    let event2 = new Event("secondEvent", "description of second event", "Salem, OR", "07/06/2020 6:00PM");
    userObject.addEvent(reusableEvent);
    userObject.addEvent(event2);
    userObject.deleteEvent(reusableEvent.id);
    expect(userObject.events).toEqual([undefined, event2]);
  })
})