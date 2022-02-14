// 1. We've decided to go vegan. Change the existing list item from "Milk" to "Oat Milk".
const groceryList = document.getElementById("grocery-list")
const milkItem = groceryList.children[0]
milkItem.textContent = "Oat Milk"


// 2. We can't exist on oat milk alone! 
//First, query your unordered list using its id, and store it in a variable. 
console.log(groceryList)
// Then, create a variable `fruits` which is an array you create, full of strings of your favorite fruits. 
const fruits = ["Passion fruit", "Guava", "Pomegranate"]
// Iterate over that array, and for each fruit, 
fruits.forEach( (fruit) => {
  // create a new list item, 
  const listItem = document.createElement("li")
  // add the fruit name to your list item, 
  listItem.textContent = fruit
  // and add the list item as a child of your unordered list.
  groceryList.appendChild(listItem)
})

// 3. We need a list of the items in our pantry, so we don't buy anything we already have! Create a new div for your pantry section. Once you've created it, add an id of `pantry-section` to the div. Add this div right after your `groceries-section`, and add a header to this section to indicate what it's for.

const pantry = document.createElement("div")
pantry.setAttribute("id", "pantry-section")
// pantry.id = "pantry-section"
const groceriesSection = document.querySelector("#groceries-section")
// groceriesSection.parentElement.appendChild(pantry)
// .insertBefore(newNode, nodeThatItComesBefore)
groceriesSection.after(pantry)
const pantryHeader = document.createElement("h1")
pantryHeader.textContent = "Our Pantry"
pantry.appendChild(pantryHeader)


// 4. Add a new `ul` tag inside the new `pantry-section` div using `.appendChild` to add an unordered list, with an id of `pantry-list`. Then, add a few different list items to this list of things you already have in your kitchen using `.innerHTML` on your `ul` element.

const ulPantryList = document.createElement("ul")
const pantrySection = document.getElementById("pantry-section")
pantrySection.appendChild(ulPantryList)
ulPantryList.id = "pantry-list"
ulPantryList.innerHTML = `<li>Baking Soda</li>`
ulPantryList.innerHTML += "<li>Sugar</li>"
ulPantryList.innerHTML += "<li>Flour</li>"
ulPantryList.innerHTML += "<li>Real Maple Syrup</li>"


// 5. Woops! We ran out of the last item in our pantry before we went shopping. Remove the last item from your pantry list and add it to the shopping list.

const lastPantryItem = document.getElementById("pantry-list").lastElementChild
ulPantryList.removeChild(lastPantryItem)
groceryList.appendChild(lastPantryItem)


// 6. Add a third div within your body with an id of `notes-section`. Add a header to indicate that this is the "Notes" section.




// 7. Add a paragraph tag with some notes on what you want to make for the week. Under the paragraph tag, still within the notes section, also add a link to your favorite recipe, with the recipe name as the text appearing on your page.

