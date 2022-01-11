// Typing Effect

const texts = ["To 3BDULBAKI"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 350);
})();

// up button
let upBtn = document.getElementById("up");

window.addEventListener("scroll",function () {
  let AscrollY =window.scrollY;
  if (AscrollY >= 900) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
})
upBtn.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Countdown

let countDown = new Date("Sep , 2022 21:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDown - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// State Section

let stateSection = document.getElementById("state");
let numbers = document.querySelectorAll(".box .number");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= stateSection.offsetTop - 200) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
})

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 5);
}

// Skills

let ourSkills = document.getElementById("our-skills");
let progresses = document.querySelectorAll(".progress span");

window.addEventListener('scroll',function () {

  if (window.scrollY >= ourSkills.offsetTop - 200) {
    progresses.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
})

// burger-menu

let burgerMenu = document.getElementById("burger-menu");
let mainNav = document.getElementById("main-nav");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
});
