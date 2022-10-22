import { createHeader } from "./header";
import { createMain, newProjectForm, createContentDiv, generateProject } from "./mainContent";
import { addEventListenerProjects } from "./projects";
import { Project } from "./newProject";


createHeader();
createMain();
generateProject(Project.allProjects[0]);
addEventListenerProjects();

const main = document.querySelector("main");

function setActiveTab(e) {
    let activeTab = e.target.textContent;
    clearContent();
    main.appendChild(createContentDiv());
    switch (activeTab) {
        case "Add Project":
            newProjectForm();
            break;
    }
}

function clearContent() {
    const main = document.querySelector("main");
    const contentDiv = document.querySelector(".content-div");
    main.removeChild(contentDiv);
}

export { setActiveTab };
export { clearContent };