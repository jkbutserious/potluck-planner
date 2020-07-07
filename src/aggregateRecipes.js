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
    for(let i=0; i<this.recipes.length; i++){
      if(this.recipes[i]){
        if(this.recipes[i].id == id){
          delete this.recipes[i];
          return true;
        }
      }
    };
    return false;
  }
}