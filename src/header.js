function createHeader() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    body.appendChild(header);

    header.appendChild(createHeadingOne());
}

function createHeadingOne() {
    const h1 = document.createElement("h1");
    h1.textContent = "Just Do It";
    return h1;
}

export{ createHeader };