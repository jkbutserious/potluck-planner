import { AggregateRecipes } from './../src/aggregateRecipes.js';

describe('instantiate new AggregateRecipe object and add recipes', () => {
  let RecipeIndex;
  let recipe;

  beforeEach(() => {
    RecipeIndex = new AggregateRecipes();
    recipe = 'apple pie'
  });

  test('should correctly instantiate new AggregateRecipe object', () => {
    expect(RecipeIndex.recipes).toEqual([]);
  });

  test('should correctly add recipe to AggregateRecipe object', () => {
    RecipeIndex.addRecipe(recipe);
    expect(RecipeIndex.recipes).toEqual(['apple pie']);
  });
});