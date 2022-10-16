function createMain() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.appendChild(main);
    main.appendChild(createMenuDiv());
    main.appendChild(createContentDiv());
}

function createMenuDiv() {
    const menuDiv = document.createElement("div");
    return menuDiv; 
}

function createContentDiv() {
    const contentDiv = document.createElement("div");
    return contentDiv;
}
export{ createMain };