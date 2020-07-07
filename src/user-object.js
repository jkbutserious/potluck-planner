export class User {
  constructor(name, aboutMe, location) {
    this.name = name;
    this.recipes = [];
    this.events = [];
    this.aboutMe = aboutMe;
    this.location = location;
    this.currentRecipeId = 0;
    this.currentEventId = 0;
  }

  addRecipe(recipe){
    recipe.id = this.assignRecipeId();
    this.recipes.push(recipe)
  }

  assignRecipeId(){
    this.currentRecipeId += 1;
    return this.currentRecipeId;
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

  addEvent(event) {
    event.id = this.assignEventId();
    this.events.push(event);
  }

  assignEventId(){
    this.currentEventId += 1;
    return this.currentEventId;
  }

  deleteEvent(eventId){
    for(let i=0; i<this.events.length; i++){
      if(this.events[i]){
        if(this.events[i].id == eventId){
          delete this.events[i];
          return true;
        }
      }
    };
    return false;
  }
}