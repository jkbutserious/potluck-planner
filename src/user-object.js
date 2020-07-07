export class User {
  constructor(name, aboutMe, location) {
    this.name = name;
    this.recipes = [];
    this.aboutMe = aboutMe;
    this.location = location;
  }

  addRecipe(recipe){
    this.recipes.push(recipe)
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