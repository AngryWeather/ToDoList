class Project {
    static allProjects = [];
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.tasks = [];
    }
}


export { Project };