const createGrid = function (size) {
  let roz = Math.sqrt(size);
  for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(`box`);
    newDiv.classList.add(`newDiv${i}`);
    let main = document.querySelector("main");
    main.appendChild(newDiv);
    newDiv.style = `width: calc(100%/${size}); height: calc(100%/${size})`;
  }
};
let currentColor;

const Buttons = {
  buttonList: ["black", "shading", "rand", "sticky"],
  blackBackground: function () {
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = `rgb(0,0,0)`;
      });
    });
    currentColor = Buttons.blackBackground;
  },

  stickyBackground: function () {
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
      });
    });
    currentColor = Buttons.stickyBackground;
  },

  shadingBackground: function () {
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = "gray";
        event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
        event.target.style.border = "1px solid black";
      });
    });
    currentColor = Buttons.shadingBackground;
  },

  randBackground: function () {
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      box.addEventListener("mouseover", () => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        event.target.style.opacity = 1;
        event.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
      });
    });
    currentColor = Buttons.randBackground;
  },
};

currentColor = Buttons.randBackground;

const makeGrid = function () {
  document.querySelector("main").textContent = "";
  let gridSize;
  window.screen.width >= 1024
    ? (gridSize = document.getElementById("gridSlider").value)
    : (gridSize = document.getElementById("gridSliderSmall").value);
  createGrid(gridSize);
  currentColor();
};

Buttons.buttonList.forEach((button) => {
  const but = document.querySelectorAll(`.${button}`);
  but.forEach((but) => {
    but.addEventListener("click", () => {
      Buttons[`${button}Background`](), makeGrid();
    });
  });
});

const gridSlider = document.getElementById("gridSlider");
gridSlider.addEventListener("input", makeGrid);

const gridSliderSmall = document.getElementById("gridSliderSmall");
gridSliderSmall.addEventListener("input", makeGrid);

makeGrid();
