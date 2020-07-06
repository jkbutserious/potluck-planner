import { Recipe } from './../src/recipe-object.js'

describe ('Recipe', () => {
  let myRecipe;

  beforeEach(() => {
    myRecipe = new Recipe()
  })

  test('Should correctly create a recipe object that contains a recipe name, ingredients, and cooking instructions', () => {
    expect(myRecipe.name).toBe('');
    expect(myRecipe.ingredients).toEqual([]);
    expect(myRecipe.instructions).toEqual([]);
  });
});