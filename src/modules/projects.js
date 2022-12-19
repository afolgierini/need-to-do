export const projects = (() => {
    let allProjects = [];

    function Project(projectName, projectId, projectTasks = []){
        this.name = projectName;
        this.projectId = projectId;
        this.tasks = projectTasks;
    };

    let selectedProjectIndex;

    function storeProject(projectName, projectId, projectTasks){
        projects.allProjects.push(new Project(projectName, projectId, projectTasks))
    };

    const getProjectIndex = (projectId) => projects.allProjects.findIndex((item) => {
        return item.projectId == projectId
    });

    const getProjectName = (projectIndex) => projects.allProjects[projectIndex].name;
    
    const deleteProject = (projectId) => {
        projects.allProjects.splice(getProjectIndex(projectId), 1)
    };

    const defaultProjects = () => [
        {name: 'School', projectId: 0, tasks: [
            {name: 'Study math', dueDate: '2022-12-22', taskId: 0, completedStatus: true}, 
            {name: 'History essay', dueDate: '2022-11-23', taskId: 1, completedStatus: false}, 
            {name: 'Chemistry project', dueDate: '2022-10-19', taskId: 2, completedStatus: false},
            {name: 'Help colleague', dueDate: '2022-11-23', taskId: 3, completedStatus: true}, 
            {name: 'Read a book', dueDate: '2022-10-19', taskId: 4, completedStatus: false}
        ]}, 
        {name: 'Programming course', projectId: 1, tasks: [
            {name: 'Study DSA', dueDate: '2022-12-22', taskId: 0, completedStatus: false}, 
            {name: 'Learn C# basics', dueDate: '2022-11-23', taskId: 1, completedStatus: false}, 
            {name: 'Read Clean Code', dueDate: '2022-10-19', taskId: 2, completedStatus: false},
            {name: 'Study SQL', dueDate: '2022-10-19', taskId: 3, completedStatus: true}
        ]},
        {name: 'Home activities', projectId: 2, tasks: [
            {name: 'Clean my room', dueDate: '2022-12-22', taskId: 0, completedStatus: false}, 
            {name: 'Take out the trash', dueDate: '2022-11-23', taskId: 1, completedStatus: true}, 
            {name: 'Bath the dogs', dueDate: '2022-10-19', taskId: 2, completedStatus: true}
        ]},
        {name: 'Test', projectId: 3, tasks: [
            {name: 'T 01', dueDate: '2022-12-22', taskId: 0, completedStatus: true}, 
            {name: 'T 02', dueDate: '2022-11-23', taskId: 1, completedStatus: false}, 
            {name: 'T 03', dueDate: '2022-10-19', taskId: 2, completedStatus: false},
            {name: 'T 04', dueDate: '2022-12-22', taskId: 3, completedStatus: true}, 
            {name: 'T 04', dueDate: '2022-11-23', taskId: 4, completedStatus: true}, 
            {name: 'T 05', dueDate: '2022-10-19', taskId: 5, completedStatus: false}
        ]} 
    ];

    const insertDefaultProjects = () => {
        defaultProjects().forEach(project => storeProject(project.name, project.projectId, project.tasks))
    }

    return{
        allProjects,
        storeProject,
        getProjectIndex,
        getProjectName,
        deleteProject, 
        insertDefaultProjects,
        selectedProjectIndex
    }     
})()