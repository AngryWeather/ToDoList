class Project {
    // static allProjects = [];
    static allProjects = [];
    static projects = JSON.parse(localStorage.getItem("projects")) || [];

    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    static setProjects() {
        localStorage.setItem("projects", JSON.stringify(Project.projects));
    }
}


export { Project };