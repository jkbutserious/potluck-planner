import { User } from '../src/user-object.js';
import { Recipe } from '../src/recipe-object.js';
import { AggregateRecipes } from '../src/aggregateRecipes.js';

describe('should include all tests related to the user object', () => {
  let userObject;
  let recipeIndex;

  beforeEach(() => {
    const description = "Likes long walks on the beach"
    userObject = new User("Kyle", description, "Portland, OR");
    recipeIndex = new AggregateRecipes();
  });

  test('should properly instantiate new user object', () => {
    expect(userObject.name).toEqual("Kyle");
    expect(userObject.recipes).toEqual([]);
    expect(userObject.aboutMe).toEqual("Likes long walks on the beach");
    expect(userObject.location).toEqual("Portland, OR");
  });

  test('add a new recipe to the user object', () => {
    let recipe = new Recipe("pot Roast");
    recipeIndex.addRecipe(recipe);
    userObject.addRecipe(recipe);
    expect(userObject.recipes).toEqual([recipe]);
  });

  test("remove user object from the attendee array", ()=>{
    let recipe1 = new Recipe("pot Roast");
    let recipe2 = new Recipe("pizza");
    recipeIndex.addRecipe(recipe1);
    recipeIndex.addRecipe(recipe2);
    userObject.addRecipe(recipe1);
    userObject.addRecipe(recipe2);
    userObject.removeRecipe(recipe1.id);
    expect(userObject.recipes).toEqual([undefined, recipe2])
  })
})