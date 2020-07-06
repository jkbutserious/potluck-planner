export class Recipe {
  constructor(name) {
    this.name = '';
    this.ingredients = [];
    this.instructions = [];
  }

  addIngredient(newIngredient) {
    this.ingredients.push(newIngredient);
  }
}