import { projects } from './projects';
import { localStorageModule } from './local-storage';

export const renderProjects = () => {

    // Retrieves data from the Local Storage
    localStorageModule.retrieveLocalStorage()

    // Clear the projects list before adding projects again
    const clearProjects = (() => {
        document.querySelectorAll('.projects-list').forEach(item => {
            item.innerHTML = '';
        })
    })()

    // Append a project to the 'projects-list' HTML tag
    const appendProjects = (project) => { 
        document.querySelectorAll('.projects-list').forEach(item => {
            item.insertAdjacentHTML('beforeend', project); 
        })

    }

    // Loops through the 'allProjects' array to append all items
    projects.allProjects.forEach(item => {
        let project = `
        <div class="projects" id="${item.projectId}">
            <div class="project-name">${item.name}</div>
            <div class="remove-project-btn-wrapper">
                <div class="remove-project-btn" id="${item.projectId}">✖</div>
            </div>
        </div> `;
         
        appendProjects(project);  
    })
}
