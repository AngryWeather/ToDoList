import { createHeader } from "./header";
import { createMain, newProjectForm, createContentDiv, generateProject } from "./mainContent";
import { addEventListenerProjects } from "./projects";
import { Project } from "./newProject";
import { renderNewProject } from "./mainContent";


createHeader();
createMain();
generateProject(Project.projects[0]);
addEventListenerProjects();
// const projects = JSON.parse(localStorage.getItem("projects"));
// console.log("projects length: " + projects.length);

for (let i = 0; i < Project.projects.length; i++) {
    console.log("Project: " + Project.projects[i].name);
    renderNewProject(Project.projects[i]);
}

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