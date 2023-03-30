import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";


let food = getRandomFoodPosition()

const EXPASION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPASION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition = null;

  while (newFoodPosition === null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  console.log(newFoodPosition);

  return newFoodPosition;
}
