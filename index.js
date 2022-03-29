const doors = Array.from(document.querySelectorAll(".doors p"));

let correctDoor;
let hostsDoor;

const generateNum = () => {
  return Math.floor(Math.random() * 2);
};

const getWinningDoor = () => {
  correctDoor = generateNum();
};

const hostsPick = () => {
  let userPick = Number(document.querySelector("#firstpick").value) - 1; //minus 1 to match array index & door ID's
  hostsDoor = generateNum();
  if (hostsDoor === correctDoor || hostsDoor === userPick) {
    do {
      hostsDoor = generateNum();
    } while (hostsDoor === correctDoor || hostsDoor === userPick);
  }

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

doors.forEach((door) => door.addEventListener("click", userSelectsDoor));

document.querySelector(".host").addEventListener("click", hostsPick);

document.querySelector(".replay").addEventListener("click", () => {
  doors.forEach((door) => {
    door.innerHTML = "?";
    getWinningDoor();
  });
});

getWinningDoor();
