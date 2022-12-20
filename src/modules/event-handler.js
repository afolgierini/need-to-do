import { projects } from './projects';
import { tasks } from './tasks';
import { renderProjects } from './render-projects';
import { renderTasks } from './render-tasks';
import { localStorageModule } from './local-storage';

let currentDay = String(new Date().getDate()).padStart(2, '0');
let currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
let currentYear = new Date().getFullYear();


export const eventHandler = () => {
    const addEvents = () => {

        // Menu button show/hide events
        document.querySelector('.menu-icon-wrapper').addEventListener('mouseup', e => {
            document.querySelector('.sidebar').classList.toggle('hidden-menu'); 
        })
        document.querySelector('.menu-icon-wrapper-mobile').addEventListener('mouseup', e => { 
            document.querySelector('.sidebar-mobile').classList.toggle('hidden-menu');
        })
    

        //Function to reset inputs values
        const resetInputsValues = () => {
            document.querySelector('.sidebar-input').value = ''
            document.querySelector('.sidebar-mobile-input').value = ''
            document.querySelector('.new-task-name-input').value = '';
            document.querySelector('.new-task-date').value = '';
        }


        // Add Project buttons 'hidden-btn' class
        document.querySelectorAll('.add-project-btn').forEach(button => {
            button.addEventListener('mouseup', e => {
                document.querySelectorAll('.new-project').forEach(item => {
                    item.classList.toggle('hidden-btn');
                })
                document.querySelectorAll('.add-project-btn').forEach(item => {
                    item.classList.toggle('hidden-btn');
                })
            })   
        })
        document.querySelectorAll('.add-btn').forEach(item => {    
            item.addEventListener('mouseup', e => {
                document.querySelectorAll('.new-project').forEach(item => {
                    item.classList.toggle('hidden-btn');
                })   
                document.querySelectorAll('.add-project-btn').forEach(item => {
                    item.classList.toggle('hidden-btn');
                }) 
            })     
        })
        document.querySelectorAll('.cancel-btn').forEach(item => {
            item.addEventListener('mouseup', e => {
                document.querySelectorAll('.new-project').forEach(item => {
                    item.classList.toggle('hidden-btn');
                })   
                document.querySelectorAll('.add-project-btn').forEach(item => {
                    item.classList.toggle('hidden-btn');
                }) 
                resetInputsValues()
            })     
        })


        // Add Project buttons event
        document.querySelector('.add-normal').addEventListener('mouseup', e => {
            // Checks if the input value is empty or is composed by spaces
            if (document.querySelector('.sidebar-input').value === '' || !/\S/.test(document.querySelector('.sidebar-input').value)) return

            projects.storeProject(document.querySelector('.sidebar-input').value, projects.allProjects.length);

            localStorageModule.updateLocalStorage()
            resetInputsValues()
            allProjectsEvents()
        })
        document.querySelector('.add-mobile').addEventListener('mouseup', e => {
            // Checks if the input value is empty or is composed by spaces
            if (document.querySelector('.sidebar-mobile-input').value === '' || !/\S/.test(document.querySelector('.sidebar-mobile-input').value)) return

            projects.storeProject(document.querySelector('.sidebar-mobile-input').value, projects.allProjects.length);

            localStorageModule.updateLocalStorage()
            resetInputsValues()
            allProjectsEvents()
        })


        // Rendered projects events (render selected projects tasks)
        const selectedProjectEvent = () => {
            document.querySelectorAll('.projects').forEach(item => {
                item.addEventListener('mouseup', e => {
                    if (e.target.innerText === '✖') return
                    document.querySelector('.selected-project-title').innerHTML = projects.getProjectName(projects.getProjectIndex(Number(e.target.id)));

                    projects.selectedProjectIndex = projects.getProjectIndex(Number(e.target.id))

                    allTasksEvents()
                })
            })
        }
        selectedProjectEvent() 
      

        // Delete project button event handler
        const deleteProjectBtn = () => {
            document.querySelectorAll('.remove-project-btn').forEach(item => {
                item.addEventListener('mouseup', e => {
                    projects.deleteProject(Number(e.target.id))

                    localStorageModule.updateLocalStorage()
                    allProjectsEvents()
                })
            })    
        }
        deleteProjectBtn()
  

        // Confirm new task event handler
        document.querySelector('.confirm-new-task-btn').addEventListener('mouseup', e => {
            // Checks if the input value is empty or is composed by spaces
            if (document.querySelector('.new-task-name-input').value === '' || !/\S/.test(document.querySelector('.new-task-name-input').value)) {
                modalAndBackground()
                resetInputsValues()
                return
            }
            if(projects.selectedProjectIndex === undefined) {
                modalAndBackground()
                resetInputsValues()
                return
            }

            tasks.storeTask(document.querySelector('.new-task-name-input').value,
            document.querySelector('.new-task-date').value = `${currentYear}-${currentMonth}-${currentDay}`, 
            projects.allProjects[projects.selectedProjectIndex].tasks.length);

            localStorageModule.updateLocalStorage()
            resetInputsValues()
            modalAndBackground()
            allTasksEvents()
        })


        // Set task as completed (checkbox)
        const setTaskAsCompleted = () => {
            document.querySelectorAll('.task-checkbox').forEach(item => {
                item.addEventListener('mouseup', e => {
                    tasks.updateTaskStatus(Number(e.target.id))

                    localStorageModule.updateLocalStorage()
                    allTasksEvents()
                })
            })
        }
        setTaskAsCompleted()


        // Update tasks due date
        const updateTaskDate = () => {
            document.querySelectorAll('.date-edit-icon').forEach(item => {
                item.addEventListener('mouseup', e => {
                    tasks.updateTaskDueDate(Number(e.target.id), e.target.previousElementSibling.value)  
                    allTasksEvents()
                })
            })
        }
        updateTaskDate()


        // Delete task button event handler
        const deleteTaskBtn = () => {
            document.querySelectorAll('.remove-task-btn').forEach(item => {
                item.addEventListener('mouseup', e => {
                    tasks.deleteTask(Number(e.target.id))
                    localStorageModule.updateLocalStorage()
                    allTasksEvents()
                })
            })    
        }
        deleteTaskBtn()


        // New task modal and background blur
        const modalAndBackground = () => {
            document.querySelector('.add-task-modal').classList.toggle('hidden-modal');
            document.querySelector('.header').classList.toggle('blur-background'); 
            document.querySelector('.main').classList.toggle('blur-background');
        }
        document.querySelector('.add-task-btn').addEventListener('mouseup', e => {
            modalAndBackground() 
        })
        document.querySelector('.close-modal-btn').addEventListener('mouseup', e => {
            modalAndBackground()
            resetInputsValues()
        })
        document.querySelector('.cancel-new-task-btn').addEventListener('mouseup', e => {
            resetInputsValues()
            modalAndBackground() 
        })


        // Highlight selected project (different colors and style)
        const highlightProjectEvent = () => {
            const removeHighlightedProject = () => {
                if (document.querySelector('.highlighted-project')){
                    document.querySelector('.highlighted-project').classList.remove('highlighted-project')
                }
            }      
            document.querySelectorAll('.projects').forEach(project => {
                project.addEventListener('mouseup', e => {
                    if (e.target.classList.contains('project-name')) {
                        removeHighlightedProject()
                        e.target.parentNode.classList.add('highlighted-project')
                    } else if (e.target.classList.contains('remove-project-btn') || e.target.classList.contains('remove-project-btn-wrapper')) {
                        // do nothing
                    } else {
                        removeHighlightedProject()
                        e.target.classList.add('highlighted-project')
                    }  
                })
            })
        }
        highlightProjectEvent()


        // Function with all projects events
        const allProjectsEvents = () => {
            renderProjects()
            selectedProjectEvent()
            highlightProjectEvent()
            deleteProjectBtn()
        }
        

        // Function with all tasks events
        const allTasksEvents = () => {
            renderTasks()
            updateTaskDate()
            setTaskAsCompleted()
            deleteTaskBtn()
        }
    }

    
    return addEvents()
}