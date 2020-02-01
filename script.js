const createGrid = function(size) {
  let roz = Math.sqrt(size);
  for (let i = 0; i < size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(`box`);
    newDiv.classList.add(`newDiv${i}`);
    let main = document.querySelector("main");
    main.appendChild(newDiv);
    newDiv.style = `width: calc(100%/${roz}); height: calc(100%/${roz})`;
  }
};

const blackBackground = function() {
  let boxlist = document.querySelectorAll(".box");
  boxlist.forEach(box => {
    box.addEventListener("mouseover", () => {
      event.target.style.backgroundColor = `rgb(0,0,0)`;
    });
  });
};

const randomBackground = function() {
  let boxlist = document.querySelectorAll(".box");
  boxlist.forEach(box => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    box.addEventListener("mouseover", () => {
      event.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    });
  });
};

const buttonBlack = document.getElementById("black-button");
buttonBlack.addEventListener("click", blackBackground);
const buttonRandom = document.getElementById("random-button");
buttonRandom.addEventListener("click", randomBackground);
createGrid(100);
