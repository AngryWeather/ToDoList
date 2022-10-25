class Project {
    static allProjects = [];
    static projects = JSON.parse(localStorage.getItem("projects")) || [];

    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }

    printer() {
        console.log("hello world");
    }


    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    static setProjects() {
        localStorage.setItem("projects", JSON.stringify(Project.allProjects));
    }
}


export { Project };