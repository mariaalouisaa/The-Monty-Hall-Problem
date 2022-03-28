// generate a number from 1 - 10
// user clicks on a door
// the number is reveled
// result displayed in table
// guesses updates
const doors = Array.from(document.querySelectorAll(".doors p"));

const generateNum = () => {
  return Math.floor(Math.random() * 7);
};

let number = generateNum();

const userSelectsDoor = (e) => {
  if (Number(e.target.id) === number) {
    e.target.style.background = "green";
  } else {
    e.target.style.background = "red";
    doors[number].style.background = "yellow";
  }
  resetCards();
};

const resetCards = () => {
  setTimeout(() => {
    doors.forEach((door) => (door.style.background = "none"));
    number = generateNum();
  }, 1000);
};

doors.forEach((door) => door.addEventListener("click", userSelectsDoor));
