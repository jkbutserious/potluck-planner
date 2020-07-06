import { AggregateRecipes } from './../src/aggregateRecipes.js';

describe('instantiate new AggregateRecipe object', () => {
  let appRecipeIndex;

  beforeEach(() => {
    appRecipeIndex = new AggregateRecipes();
  });

  test('should correctly instantiate new Aggregate Recipe object', () => {
    expect(appRecipeIndex.recipes).toEqual([]);
  });

});