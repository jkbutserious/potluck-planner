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
    
  }
}