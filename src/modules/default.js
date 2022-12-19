

let currentYear = new Date().getFullYear()

// Default HTML module
export const renderDefault = () => {
   return `
        <header class="header">
        <div class="logo">
            <div class="menu-icon-wrapper">
            <img class="menu-icon" src="./menu.png" alt="">
            </div>    
            <div class="menu-icon-wrapper-mobile">
            <img class="menu-icon" src="./menu.png" alt="">
            </div> 
            <p>NeedToDo</p>
        </div>
        
        </header>

        <main class="main">
            <aside class="sidebar">

            <div class="sidebar-top-wrapper">
                <div class="add-project-btn-wrapper">
                <button class="add-project-btn">
                    ADD PROJECT
                </button>
                
                <div class="new-project hidden-btn">
                    <div class="new-project-name">
                    <input type="text" class="new-project-name-input sidebar-input" placeholder="Project name" required>
                    </div>
                    <div class="new-project-btns">
                    <div class="new-project-add-btn">
                        <button class="add-btn add-normal">ADD</button>
                    </div>
                    <div class="new-project-cancel-btn">
                        <button class="cancel-btn">CANCEL</button>
                    </div>
                    </div>
                </div>
                </div>

                
                <div class="projects-wrapper">
                <div class="projects-title">⚫ Projects</div>
                <div class="projects-list"></div>
                </div>
            </div>

            <div class="sidebar-footer">
                <div class="social-links">
                <a class="github" href="https://github.com/afolgierini" target="_blank">
                    Github <img class="github-icon" src="./github-icon.png" alt="">
                </a>
                <a class="linkedin" href="https://www.linkedin.com/in/alefolgierini/" target="_blank">
                    LinkedIn <img class="linkedin-icon" src="./linkedin-icon.png" alt="">
                </a>
                </div> 
                <p>
                © Alexandre Folgierini ${currentYear}
                </p> 
            </div>
            </aside>


            <aside class="sidebar-mobile hidden-menu">

            <div class="sidebar-top-wrapper">
                <div class="add-project-btn-wrapper">
                <button class="add-project-btn">
                    ADD PROJECT
                </button>
                
                <div class="new-project hidden-btn">
                    <div class="new-project-name">
                    <input type="text" class="new-project-name-input sidebar-mobile-input" placeholder="Project name" required>
                    </div>
                    <div class="new-project-btns">
                    <div class="new-project-add-btn">
                        <button class="add-btn add-mobile">ADD</button>
                    </div>
                    <div class="new-project-cancel-btn">
                        <button class="cancel-btn">CANCEL</button>
                    </div>
                    </div>
                </div>
                </div>
                
                <div class="projects-wrapper">
                <div class="projects-title">⚫ Projects</div>
                <div class="projects-list"></div>
                </div>
            </div>
            </aside> 
        
            <div class="content-wrapper">
            <div class="content">
                <div class="selected-project">
                    <div class="selected-project-title">
                       NeedToDo 
                    </div>

                    <div class="selected-project-tasks">
                        
                    </div>

                    <button class="add-task-btn">
                        <img class="plus-icon" src="./plus-icon.png" alt="">
                        <p>
                            ADD TASK
                        </p>
                    </button>
                </div>
                
            </div>
            </div>

            <footer class="footer">
            <div class="social-links">
                <a  class="github" href="https://github.com/afolgierini" target="_blank">
                Github <img class="github-icon" src="./github-icon.png" alt="">
                </a>
                <a class="linkedin" href="https://www.linkedin.com/in/alefolgierini/" target="_blank">
                LinkedIn <img class="linkedin-icon" src="./linkedin-icon.png" alt="">
                </a>
            </div> 
            <p class="my-name">
                © Alexandre Folgierini ${currentYear}
            </p>
            </footer>

            
        </main>

        <div class="add-task-modal hidden-modal">
        <div class="close-modal-btn-wrapper">
            <p class="close-modal-btn">✖</p>
        </div>

        <div class="add-task-modal-form">
            <div class="modal-input-wrapper">  
                <p>Task name</p>
                <input type="text" name="" id="" class="new-task-name-input" required>
            </div>
            
            <div class="modal-input-wrapper">
                <p>Due date</p>
                <input type="date" name="" id="" class="new-task-date">
            </div>

            <div class="add-task-modal-btns">
                <button class="confirm-new-task-btn">ADD</button>
                <button class="cancel-new-task-btn">CANCEL</button>
            </div>
        </div>
        </div>
   `
}