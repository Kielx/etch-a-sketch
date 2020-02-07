const createGrid = function(size) {
  let roz = Math.sqrt(size);
  for (let i = 0; i < size*size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(`box`);
    newDiv.classList.add(`newDiv${i}`);
    let main = document.querySelector("main");
    main.appendChild(newDiv);
    newDiv.style = `width: calc(100%/${size}); height: calc(100%/${size})`;
  }
};

const blackBackground = function() {
    makeGrid()
  let boxlist = document.querySelectorAll(".box");
  boxlist.forEach(box => {
    box.addEventListener("mouseover", () => {
      event.target.style.backgroundColor = `rgb(0,0,0)`;
    });
  });
};

const stickyRandomBackground = function() {
    makeGrid()
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

const randomBackground = function() {
    makeGrid()
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach(box => {

      box.addEventListener("mouseover", () => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        event.target.style.opacity = 1;
        event.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
      });
    });
  };

  const shading = function() {
    makeGrid();
    let boxlist = document.querySelectorAll(".box");
    boxlist.forEach(box => {
      box.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = 'gray';
        event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
        event.target.style.border = '1px solid black';
      });
    });
  };


const makeGrid = function(){
    document.querySelector('main').textContent = '';
    let gridSize = document.getElementById("grid-size").value;
    createGrid(gridSize);};



const black = document.querySelectorAll(".black")
black.forEach(black => {
  black.addEventListener('click', blackBackground);
})

const sticky = document.querySelectorAll(".sticky")
sticky.forEach(sticky => {
  sticky.addEventListener('click', stickyRandomBackground);
})

const rand = document.querySelectorAll(".rand")
rand.forEach(rand => {
  rand.addEventListener('click', randomBackground);
})


const buttonShading = document.getElementById("shading-button");
buttonShading.addEventListener("click", shading);


const buttonCreateGrid = document.getElementById("create-button");
buttonCreateGrid.addEventListener("click", makeGrid)

makeGrid();