let gameArr = [];
let userArr = [];
let clrs = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let back = document.querySelector("body");
let img = document.querySelector("img");
let maxi = 0;
let flag = 0;
let highScore = document.querySelector(".high-score");

let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.addEventListener("click", btnClick);
}

function initialiseClrs() {
  h2.classList.remove("rrr");
  h1.classList.remove("rrr");
  h2.classList.remove("whiteee");
  h1.classList.remove("whiteee");
  h1.classList.add("black");
  h2.classList.add("black");
  img.classList.add("image");
  img.classList.remove("image2");
  back.style.backgroundColor = " rgb(218, 249, 202)";
}
function finalClrs() {
  img.classList.remove("image");
  img.classList.add("image2");
  h1.classList.add("rrr");
  h2.classList.add("rrr");
  h1.classList.remove("black");
  h2.classList.remove("black");
  h1.classList.remove("whiteee");
  h2.classList.remove("whiteee");
  back.style.backgroundColor = "rgb(0,0,0)";
}
document.addEventListener("keydown", (e) => {
  if (started == false) {
    console.log("game started");
    started = true;
    cnt = 0;
    initialiseClrs();
    levelUp();
  }
});
function lightUp(color) {
  color.classList.add("white");
  setTimeout(() => {
    color.classList.remove("white");
  }, 200);
}
function userLight(color) {
  color.classList.add("pink");
  setTimeout(() => {
    color.classList.remove("pink");
  }, 200);
}
function levelUp() {
  level++;

  if (level == 2) {
    back.style.backgroundColor = "rgb(194, 236, 172)";
  }
  if (level == 3) {
    back.style.backgroundColor = "rgb(169, 185, 112)";
  }
  if (level == 4) {
    back.style.backgroundColor = "rgb(181, 159, 96)";
  }
  if (level == 5) {
    back.style.backgroundColor = "  rgb(193, 132, 80)";
  }
  if (level == 6) {
    back.style.backgroundColor = " rgb(206, 106, 64)";
  }
  if (level == 7) {
    back.style.backgroundColor = " rgb(218, 79, 48)";
  }
  if (level == 8) {
    back.style.backgroundColor = " rgb(231, 54, 32)";
  }
  if (level == 9) {
    back.style.backgroundColor = " rgb(243, 27, 16)";
  }
  if (level == 10) {
    back.style.backgroundColor = " rgb(255, 0, 0)";
  }
  if (level == 11) {
    back.style.backgroundColor = "rgb(139, 0, 0)";
  }
  if (level > 13) {
    finalClrs();
  }
  h2.innerText = `Level ${level}`;
  if (level > maxi) {
    maxi = level - 1;
    highScore.innerText = `High Score : ${maxi}`;
  }
  let ind = Math.floor(Math.random() * 4);
  let c = clrs[ind];
  gameArr.push(c);
  let i = 1;
  // for (let clr of gameArr) {
  //   let temp = `.${clr}`;
  //   let num = 400;
  //   if (i > 1) num = 600;
  //   let fin = document.querySelector(temp);
  //   setTimeout(function () {
  //     lightUp(fin);
  //   }, i * num);
  //   i++;
  // }
  let clrName = `.${c}`;
  let addClass = document.querySelector(clrName);
  setTimeout(() => {
    lightUp(addClass);
  }, 700);
  console.log(gameArr);
}

function checkEqual() {
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] != gameArr[i]) return false;
  }
  return true;
}
let cnt = 0;

function btnClick() {
  cnt++;
  if (level == 0) {
    h2.innerText = "Press any key first to START :)";
    if (cnt & 1) {
      h2.classList.add("move1");
      h2.classList.remove("move2");
    } else {
      h2.classList.add("move2");
      h2.classList.remove("move1");
    }
    return;
  }
  let btn = this;
  let c = btn.getAttribute("id");
  userArr.push(c);

  userLight(btn);
  if (checkEqual() == false) {
    flag = 1;
    h2.innerHTML = `<b> GAME OVER! </b><br> SCORE : ${
      level - 1
    } <br>Press Any Key To Start Again :)`;
    maxi = Math.max(level - 1, maxi);
    highScore.innerText = `High Score : ${maxi}`;
    highScore.classList.add("changes");
    gameArr.length = 0;
    userArr.length = 0;
    started = false;
    cnt = 0;
    level = 0;

    back.style.backgroundColor = "rgb(142, 4, 4)";
    return;
  }
  if (cnt == level) {
    cnt = 0;
    userArr.length = 0;
    setTimeout(levelUp, 1000);
  }
}
