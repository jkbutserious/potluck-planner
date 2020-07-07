export class User {
  constructor(name, aboutMe, location) {
    this.name = name;
    this.recipes = [];
    this.aboutMe = aboutMe;
    this.location = location;
    this.currentId = 0;
  }

  addRecipe(recipe){
    recipe.id = this.assignRecipeId();
    this.recipes.push(recipe)
  }

  assignRecipeId(){
    this.currentId += 1;
    return this.currentId;
  }

  removeRecipe(recipeId){
    for(let i=0; i<this.recipes.length; i++){
      if(this.recipes[i]){
        if(this.recipes[i].id == recipeId){
          delete this.recipes[i];
          return true;
        }
      }
    };
    return false;
  }
}