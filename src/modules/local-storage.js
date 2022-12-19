import { projects } from "./projects";

export const localStorageModule = (() => {
    
    const saveLocalStorage = () => localStorage.setItem('projects', JSON.stringify(projects.allProjects));

    const retrieveLocalStorage = () => {
        return localStorage.getItem('projects') !== null ? projects.allProjects = JSON.parse(localStorage.getItem('projects')) : projects.insertDefaultProjects();
    }

    const updateProjects = () => {
        projects.allProjects = retrieveLocalStorage()
    }

    const updateLocalStorage = () => {
        saveLocalStorage()
        updateProjects()
    }

    return{
        saveLocalStorage,
        retrieveLocalStorage,
        updateProjects,
        updateLocalStorage
    }
})()