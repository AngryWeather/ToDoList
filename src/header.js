function createHeader() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    body.appendChild(header);
}

export{ createHeader };