import { generateProject } from "./mainContent";


function addEventListenerProjects() {
    const projectButtons = document.querySelectorAll(".project-buttons");
    projectButtons.forEach((button) => {
        button.addEventListener("click", generateProject);
    });
}

export { addEventListenerProjects };
