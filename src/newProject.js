class Project {
    static allProjects = [];
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }
}


export { Project };