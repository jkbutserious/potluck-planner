import { Recipe } from './../src/recipe-object.js'

describe ('Recipe', () => {
  let myRecipe;

  beforeEach(() => {
    myRecipe = new Recipe("pie", "old timey apple pie", "3", "4 cups", "1 hour", "ingredient list", "instructions") 
  })

  test('Should correctly create a recipe object that contains a recipe name, ingredients, and cooking instructions', () => {
    expect(myRecipe.name).toBe("pie");
    expect(myRecipe.description).toEqual("old timey apple pie");
    expect(myRecipe.difficulty).toEqual("3");
    expect(myRecipe.yield).toEqual("4 cups");
    expect(myRecipe.timeToCook).toEqual("1 hour");
    expect(myRecipe.ingredients).toEqual("ingredient list");
    expect(myRecipe.instructions).toEqual("instructions");
  });
});