export class AggregateRecipes {
  constructor() {
    this.recipes = [];
    this.currentId = 0;
  }

  addRecipe(recipe) {
    recipe.id = this.assignRecipeId();
    this.recipes.push(recipe);
  }

  assignRecipeId(){
    this.currentId += 1;
    return this.currentId;
  }

  deleteRecipe(id){
    
  }
}