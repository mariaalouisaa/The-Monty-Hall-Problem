const doors = Array.from(document.querySelectorAll(".doors p"));

const generateNum = () => {
  return Math.floor(Math.random() * 7);
};

let number = generateNum();
let guesses = 8;
let result = 0;

const userSelectsDoor = (e) => {
  if (Number(e.target.id) === number) {
    e.target.style.background = "green";
    result++;
  } else {
    e.target.style.background = "red";
    doors[number].style.background = "yellow";
  }
  guesses--;
  document.querySelector("#guessed").innerHTML = guesses;
  if (guesses === 0) eightGuessed();
  resetCards();
};

const resetCards = () => {
  setTimeout(() => {
    doors.forEach((door) => (door.style.background = "none"));
    number = generateNum();
  }, 1000);
};

const eightGuessed = () => {
  document.querySelector(".message").innerHTML = "NEW ATTEMPT!";
  //update table
  guesses = 8;
  document.querySelector("#guessed").innerHTML = guesses;
};

doors.forEach((door) => door.addEventListener("click", userSelectsDoor));
