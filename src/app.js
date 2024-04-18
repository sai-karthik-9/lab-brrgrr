// Initial price of the burger
var wholeWheatBun = 10;

// Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

// Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// Function to render all elements
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

// Render functions for each ingredient
function renderPatty() {
  toggleVisibility("patty", state.Patty);
}

function renderCheese() {
  toggleVisibility("cheese", state.Cheese);
}

function renderTomatoes() {
  toggleVisibility("tomato", state.Tomatoes);
}

function renderOnions() {
  toggleVisibility("onion", state.Onions);
}

function renderLettuce() {
  toggleVisibility("lettuce", state.Lettuce);
}

// Function to toggle visibility of an ingredient based on its state
function toggleVisibility(id, isVisible) {
  let element = document.querySelector("#" + id);
  element.style.display = isVisible ? "inherit" : "none";
}

// Event listeners for ingredient buttons
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

// Render ingredient buttons with active class based on state
function renderButtons() {
  for (let ingredient in state) {
    let button = document.querySelector(`.btn-${ingredient.toLowerCase()}`);
    state[ingredient] ? button.classList.add("active") : button.classList.remove("active");
  }
}

// Render selected ingredients in the ingredients board
function renderIngredientsBoard() {
  let board = document.querySelector(".ingredients-board");
  board.innerHTML = "";
  for (let ingredient in state) {
    if (state[ingredient]) {
      let li = document.createElement("li");
      li.textContent = ingredient;
      board.appendChild(li);
    }
  }
}

// Render the total price based on selected ingredients
function renderPrice() {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").textContent = "Total Price: Rs" + totalPrice;
}

// Initial rendering
renderAll();
