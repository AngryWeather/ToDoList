function createMain() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.appendChild(main);

    main.appendChild(createMenuDiv());
    main.appendChild(createContentDiv());
}

function createMenuDiv() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.toggle("menu-div");
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.toggle("buttons-container");
    menuDiv.appendChild(buttonsContainer);

    const defaultButtons = addDefaultButtons();
    // add default buttons to container
    defaultButtons.forEach((button) => {
        buttonsContainer.appendChild(button);
    });

    return menuDiv; 
}

function generateProject(e) {
}

// create default buttons here and handle custom ones in another function
function addDefaultButtons() {
    const upcoming = document.createElement("button");
    upcoming.textContent = "Upcoming";
    const projects = document.createElement("button");
    projects.textContent = "Add Project";
    const personal = document.createElement("button");
    personal.textContent = "Personal";
    personal.classList.toggle("project-buttons")
    return [upcoming, projects, personal];
}

function createContentDiv() {
    const contentDiv = document.createElement("div");
    return contentDiv;
}
export{ createMain };
export { generateProject };