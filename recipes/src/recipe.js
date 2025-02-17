class Recipe {
  constructor(object) {
    // console.log(object);
    this.name = object.name
    this.ingredients = object.ingredients
    this.attempted = false
    this.rating = null
  }

rateRecipe(number) {
  this.attempted = true
  this.rating = number
}

changeIngredientAmount(ingredient, newAmount) {
  for (var i = 0; i < this.ingredients.length; i++) {
    if (this.ingredients[i].name === ingredient) {
    this.ingredients[i].amount = newAmount
    }
  }
}

generateGroceryList() {
 var list = "You need:" 
 for (var i = 0; i < this.ingredients.length; i++) {
  list += ` ${this.ingredients[i].amount} ${this.ingredients[i].name},`
 }
 return list
}



}

module.exports = Recipe;
