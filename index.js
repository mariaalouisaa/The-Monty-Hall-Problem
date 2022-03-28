// generate a number from 1 - 10
// user clicks on a door
// the number is reveled
// result displayed in table
// guesses updates

const generateNum = () => {
  return Math.floor(Math.random() * 7);
};

const userSelectsDoor = () => {
  console.log("clicked");
};

Array.from(document.querySelectorAll(".doors p")).forEach((door) =>
  door.addEventListener("click", userSelectsDoor)
);
