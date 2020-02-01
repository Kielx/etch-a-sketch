for(let i = 0; i<256; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add(`box`);
    newDiv.classList.add(`newDiv${i}`);
    let main = document.querySelector("main");
    main.appendChild(newDiv);

}

let box = document.querySelectorAll(".box");
box.forEach(content => {
    content.addEventListener("mouseover", () => {
        content.style.backgroundColor = 'black';
    })
});

console.log(box)
