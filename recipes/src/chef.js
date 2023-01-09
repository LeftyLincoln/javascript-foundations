var Recipe = require('../src/recipe.js');

class Chef {
 constructor(name, recipesArray) {
  console.log(recipesArray);
  this.name = name 
  this.recipeBox = recipesArray
 }

 tryRecipe(recipeName, rating) {
  // console.log(recipeName);
  // console.log(rating);
  for (var i = 0; i < this.recipeBox.length; i++)
  if (this.recipeBox[i].name === recipeName) {
   this.recipeBox[i].rateRecipe(rating)
  }
 }

 addRecipe(name, ingredients) {
  var recipe = new Recipe({name:name, ingredients:ingredients })
  this.recipeBox.push(recipe)
}

changeRecipe(recipeName, item, amount) {
  for (var i = 0; i < this.recipeBox.length; i++) {
    if (this.recipeBox[i].name === recipeName) {
      this.recipeBox[i].changeIngredientAmount(item, amount)
    }
  }
}

}


module.exports = Chef;
