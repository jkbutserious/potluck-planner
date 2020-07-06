import { AggregateRecipes } from './../src/aggregateRecipes.js';

describe('instantiate new AggregateRecipe object', () => {
  let appRecipeIndex;
  let recipe;

  beforeEach(() => {
    appRecipeIndex = new AggregateRecipes();
    recipe = 'apple pie'
  });

  test('should correctly instantiate new AggregateRecipe object', () => {
    expect(appRecipeIndex.recipes).toEqual([]);
  });

  test('should correctly add recipe to AggregateRecipe object', () => {
    appRecipeIndex.addRecipe(recipe);
    expect(appRecipeIndex.recipes).toEqual(['apple pie']);
  });

});