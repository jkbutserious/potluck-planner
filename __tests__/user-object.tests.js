import { User } from '../src/user-object.js';
import { Recipe } from '../src/recipe-object.js';

describe('should include all tests related to the user object', () => {
  let userObject;
  let recipe;

  beforeEach(() => {
    const description = "Likes long walks on the beach"
    userObject = new User("Kyle", description, "Portland, OR");
    recipe = new Recipe("pot Roast");
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
})