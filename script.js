for(let i = 0; i<256; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add(`box`);
    newDiv.classList.add(`newDiv${i}`);
    let main = document.querySelector("main");
    newDiv.textContent = i;
    main.appendChild(newDiv);

}

