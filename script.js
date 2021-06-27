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

const Buttons = {
  buttonList: ["black", "shading", "rand", "sticky"],
  blackBackground: function () {
    window.innerWidth > 1000 ? makeGrid() : makeGridSmall();
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = `rgb(0,0,0)`;
      });
    });
  },

  stickyBackground: function () {
    window.innerWidth > 1000 ? makeGrid() : makeGridSmall();
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
      });
    });
  },

  shadingBackground: function () {
    window.innerWidth > 1000 ? makeGrid() : makeGridSmall();
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach((box) => {
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = "gray";
        event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
        event.target.style.border = "1px solid black";
      });
    });
  },

  randBackground: function () {
    window.innerWidth > 1000 ? makeGrid() : makeGridSmall();
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
  },
};

const makeGrid = function () {
  document.querySelector("main").textContent = "";
  let gridSize = document.getElementById("grid-size").value;
  createGrid(gridSize);
};

const makeGridSmall = function () {
  document.querySelector("main").textContent = "";
  let gridSize = document.getElementById("grid-size-small").value;
  createGrid(gridSize);
};

Buttons.buttonList.forEach((button) => {
  const but = document.querySelectorAll(`.${button}`);
  but.forEach((but) => {
    but.addEventListener("click", Buttons[`${button}Background`]);
  });
});

const buttonCreateGrid = document.getElementById("create-button");
buttonCreateGrid.addEventListener("click", makeGrid);

const buttonCreateGridSmall = document.getElementById("create-button-small");
buttonCreateGridSmall.addEventListener("click", makeGridSmall);

window.onload(Buttons.stickyBackground());

makeGrid();
