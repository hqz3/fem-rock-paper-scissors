export function generateHouseChoice(game) {
  const choice = Math.floor(Math.random() * 3);
  game.houseChoice = game.chips[choice].cloneNode(true);
}
