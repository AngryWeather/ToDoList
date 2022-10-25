import { createHeader } from "./header";
import { createMain, newProjectForm, createContentDiv, generateProject } from "./mainContent";
import { addEventListenerProjects } from "./projects";
import { Project } from "./newProject";
import { renderNewProject, addDefaultButtons } from "./mainContent";

// console.log("Before all id: " + Project.projects[0].id);

createHeader();
createMain();
console.log("Before id: " + Project.projects[0].id);
    if (Project.projects.length) {
        for (let i = 0; i < Project.projects.length; i++) {
            renderNewProject(Project.projects[i]);
        }
    }
    console.log("After id: " + Project.projects[0].id);

generateProject(Project.projects[0]);
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