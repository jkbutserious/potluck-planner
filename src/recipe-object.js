export class Recipe {
  constructor(name, description, difficulty, recipeYield, time, ingredients, instructions) {
    this.name = name;
    this.description = description;
    this.difficulty = difficulty;
    this.yield = recipeYield;
    this.timeToCook = time;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}