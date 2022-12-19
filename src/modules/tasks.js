import { projects } from "./projects";

export const tasks = (() => {

    function Task(taskName, taskDueDate, taskId, taskStatus){
        this.name = taskName;
        this.dueDate = taskDueDate;
        this.taskId = taskId;
        this.completedStatus = taskStatus;
    };

    function storeTask(taskName, taskDueDate, taskId){
        projects.allProjects[projects.selectedProjectIndex].tasks.push(new Task(taskName, taskDueDate, taskId, false))  
    };

    const getTaskIndex = (taskId) => 
    projects.allProjects[projects.selectedProjectIndex].tasks
    .findIndex((item) => {
        return item.taskId === taskId
    });

    const updateTaskStatus = (taskId) => {
        projects.allProjects[projects.selectedProjectIndex].tasks[getTaskIndex(taskId)].completedStatus === false ? 
        projects.allProjects[projects.selectedProjectIndex].tasks[getTaskIndex(taskId)].completedStatus = true : 
        projects.allProjects[projects.selectedProjectIndex].tasks[getTaskIndex(taskId)].completedStatus = false;
    }

    const updateTaskDueDate = (taskId, newDate) => {
        projects.allProjects[projects.selectedProjectIndex].tasks[getTaskIndex(taskId)].dueDate = newDate;
    }
    
    const deleteTask = (taskId) => {
        projects.allProjects[projects.selectedProjectIndex].tasks
        .splice(getTaskIndex(taskId), 1)
    };

    return{
        storeTask,
        updateTaskStatus,
        updateTaskDueDate,
        deleteTask
    }     
})()