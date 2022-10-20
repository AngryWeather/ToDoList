class Project {
    static allProjects = [];
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

function projects() {
   const allProjects = [];
   return allProjects;
}

export { Project };
export { projects };