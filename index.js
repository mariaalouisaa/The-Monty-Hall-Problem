const doors = Array.from(document.querySelectorAll(".doors p"));

const generateNum = () => {
  return Math.floor(Math.random() * 2);
};

let correctDoor = generateNum();
let hostsDoor = generateNum();

const hostsPick = () => {
  hostsDoor === correctDoor
    ? (doors[hostsDoor].innerHTML = "Car")
    : (doors[hostsDoor].innerHTML = "Pen");
};

const userSelectsDoor = (e) => {
  if (Number(e.target.id) === correctDoor) {
    e.target.style.background = "green";
  } else {
    e.target.style.background = "red";
  }
};

const resetCards = () => {
  setTimeout(() => {
    doors.forEach((door) => (door.style.background = "none"));
    number = generateNum();
  }, 1000);
};

const eightGuessed = () => {
  //update table
};

doors.forEach((door) => door.addEventListener("click", userSelectsDoor));

setTimeout(() => {
  hostsPick();
}, 1500);
