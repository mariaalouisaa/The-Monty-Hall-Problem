const doors = Array.from(document.querySelectorAll(".doors p"));

let correctDoor;
let hostsDoor;

const generateNum = () => {
  return Math.floor(Math.random() * 2);
};

const getNumbers = () => {
  correctDoor = generateNum();
  hostsDoor = generateNum();
  if (correctDoor === hostsDoor) {
    do {
      hostsDoor = generateNum();
    } while (correctDoor === hostsDoor);
  }
};

const hostsPick = () => {
  hostsDoor === correctDoor
    ? (doors[hostsDoor].innerHTML = "Prize!")
    : (doors[hostsDoor].innerHTML = "No Prize");
};

const userSelectsDoor = (e) => {
  if (Number(e.target.id) === correctDoor) {
    e.target.innerHTML = "Prize!";
  } else {
    e.target.innerHTML = "No Prize";
  }
};

const resetCards = () => {
  setTimeout(() => {
    doors.forEach((door) => (door.style.background = "none"));
    number = generateNum();
  }, 1000);
};

doors.forEach((door) => door.addEventListener("click", userSelectsDoor));

document.querySelector(".host").addEventListener("click", hostsPick);

document.querySelector(".replay").addEventListener("click", () => {
  doors.forEach((door) => {
    door.innerHTML = "?";
    getNumbers();
  });
});

getNumbers();
