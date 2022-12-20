import { projects } from "./projects";


export const renderTasks = () => {

    // Clear the tasks list before adding them again
    const clearTasks = (() => {
        document.querySelector('.selected-project-tasks').innerHTML = '';
    })()

    // Append a task to the 'selected-project' HTML tag
    const appendTasks = (task) => { 
        document.querySelector('.selected-project-tasks').insertAdjacentHTML('beforeend', task); 
    }

    // Loops through the selected project 'tasks' array to append all items
    projects.allProjects[projects.selectedProjectIndex].tasks.forEach(item => {
        if(item.completedStatus == true){
            let task = `
                <div class="tasks">
                    <div class="task-left-side">
                        <input class="task-checkbox" type="checkbox" name="" id="${item.taskId}" checked>
                        <div class="task-title line-through">${item.name}</div>
                    </div>
                    <div class="task-right-side">
                        <div class="task-date-wrapper"><input type="date" name="" id="${item.taskId}" class="task-date" value="${item.dueDate}"> <img class="date-edit-icon" src="./checked2-icon.png" alt="" id="${item.taskId}"></div>
                        <div class="remove-task-btn" id="${item.taskId}">✖</div>
                    </div>                
                </div> `;

                appendTasks(task);  
                return
        }

        let task = `
        <div class="tasks">
            <div class="task-left-side">
                <input class="task-checkbox" type="checkbox" name="" id="${item.taskId}">
                <div class="task-title">${item.name}</div>
            </div>
            <div class="task-right-side">
                <div class="task-date-wrapper"><input type="date" name="" id="${item.taskId}"  class="task-date" value="${item.dueDate}"> <img class="date-edit-icon" src="./checked2-icon.png" alt="" id="${item.taskId}"></div>
                <div class="remove-task-btn" id="${item.taskId}">✖</div>
            </div>                
        </div> `;
         
        appendTasks(task);  
    })
}