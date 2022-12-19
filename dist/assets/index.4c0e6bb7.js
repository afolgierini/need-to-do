(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function d(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(s){if(s.ep)return;s.ep=!0;const r=d(s);fetch(s.href,r)}})();let b=new Date().getFullYear();const h=()=>`
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
                <div class="projects-title">\u26AB Projects</div>
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
                \xA9 Alexandre Folgierini ${b}
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
                <div class="projects-title">\u26AB Projects</div>
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
                \xA9 Alexandre Folgierini ${b}
            </p>
            </footer>

            
        </main>

        <div class="add-task-modal hidden-modal">
        <div class="close-modal-btn-wrapper">
            <p class="close-modal-btn">\u2716</p>
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
   `,t=(()=>{let u=[];function e(o,m,a=[]){this.name=o,this.projectId=m,this.tasks=a}let d;function p(o,m,a){t.allProjects.push(new e(o,m,a))}const s=o=>t.allProjects.findIndex(m=>m.projectId==o),r=o=>t.allProjects[o].name,c=o=>{t.allProjects.splice(s(o),1)},i=()=>[{name:"School",projectId:0,tasks:[{name:"Study math",dueDate:"2022-12-22",taskId:0,completedStatus:!0},{name:"History essay",dueDate:"2022-11-23",taskId:1,completedStatus:!1},{name:"Chemistry project",dueDate:"2022-10-19",taskId:2,completedStatus:!1},{name:"Help colleague",dueDate:"2022-11-23",taskId:3,completedStatus:!0},{name:"Read a book",dueDate:"2022-10-19",taskId:4,completedStatus:!1}]},{name:"Programming course",projectId:1,tasks:[{name:"Study DSA",dueDate:"2022-12-22",taskId:0,completedStatus:!1},{name:"Learn C# basics",dueDate:"2022-11-23",taskId:1,completedStatus:!1},{name:"Read Clean Code",dueDate:"2022-10-19",taskId:2,completedStatus:!1},{name:"Study SQL",dueDate:"2022-10-19",taskId:3,completedStatus:!0}]},{name:"Home activities",projectId:2,tasks:[{name:"Clean my room",dueDate:"2022-12-22",taskId:0,completedStatus:!1},{name:"Take out the trash",dueDate:"2022-11-23",taskId:1,completedStatus:!0},{name:"Bath the dogs",dueDate:"2022-10-19",taskId:2,completedStatus:!0}]},{name:"Test",projectId:3,tasks:[{name:"T 01",dueDate:"2022-12-22",taskId:0,completedStatus:!0},{name:"T 02",dueDate:"2022-11-23",taskId:1,completedStatus:!1},{name:"T 03",dueDate:"2022-10-19",taskId:2,completedStatus:!1},{name:"T 04",dueDate:"2022-12-22",taskId:3,completedStatus:!0},{name:"T 04",dueDate:"2022-11-23",taskId:4,completedStatus:!0},{name:"T 05",dueDate:"2022-10-19",taskId:5,completedStatus:!1}]}];return{allProjects:u,storeProject:p,getProjectIndex:s,getProjectName:r,deleteProject:c,insertDefaultProjects:()=>{i().forEach(o=>p(o.name,o.projectId,o.tasks))},selectedProjectIndex:d}})(),k=(()=>{function u(c,i,v,o){this.name=c,this.dueDate=i,this.taskId=v,this.completedStatus=o}function e(c,i,v){t.allProjects[t.selectedProjectIndex].tasks.push(new u(c,i,v,!1))}const d=c=>t.allProjects[t.selectedProjectIndex].tasks.findIndex(i=>i.taskId===c);return{storeTask:e,updateTaskStatus:c=>{t.allProjects[t.selectedProjectIndex].tasks[d(c)].completedStatus===!1?t.allProjects[t.selectedProjectIndex].tasks[d(c)].completedStatus=!0:t.allProjects[t.selectedProjectIndex].tasks[d(c)].completedStatus=!1},updateTaskDueDate:(c,i)=>{t.allProjects[t.selectedProjectIndex].tasks[d(c)].dueDate=i},deleteTask:c=>{t.allProjects[t.selectedProjectIndex].tasks.splice(d(c),1)}}})(),g=(()=>{const u=()=>localStorage.setItem("projects",JSON.stringify(t.allProjects)),e=()=>localStorage.getItem("projects")!==null?t.allProjects=JSON.parse(localStorage.getItem("projects")):t.insertDefaultProjects(),d=()=>{t.allProjects=e()};return{saveLocalStorage:u,retrieveLocalStorage:e,updateProjects:d,updateLocalStorage:()=>{u(),d()}}})(),j=()=>{g.retrieveLocalStorage(),document.querySelectorAll(".projects-list").forEach(e=>{e.innerHTML=""});const u=e=>{document.querySelectorAll(".projects-list").forEach(d=>{d.insertAdjacentHTML("beforeend",e)})};t.allProjects.forEach(e=>{let d=`
        <div class="projects" id="${e.projectId}">
            <div class="project-name">${e.name}</div>
            <div class="remove-project-btn-wrapper">
                <div class="remove-project-btn" id="${e.projectId}">\u2716</div>
            </div>
        </div> `;u(d)})},S=()=>{document.querySelector(".selected-project-tasks").innerHTML="";const u=e=>{document.querySelector(".selected-project-tasks").insertAdjacentHTML("beforeend",e)};t.allProjects[t.selectedProjectIndex].tasks.forEach(e=>{if(e.completedStatus==!0){let p=`
                <div class="tasks">
                    <div class="task-left-side">
                        <input class="task-checkbox" type="checkbox" name="" id="${e.taskId}" checked>
                        <div class="task-title line-through">${e.name}</div>
                    </div>
                    <div class="task-right-side">
                        <div class="task-date-wrapper"><input type="date" name="" id="${e.taskId}" class="task-date" value="${e.dueDate}"> <img class="date-edit-icon" src="./checked2-icon.png" alt="" id="${e.taskId}"></div>
                        <div class="remove-task-btn" id="${e.taskId}">\u2716</div>
                    </div>                
                </div> `;u(p);return}let d=`
        <div class="tasks">
            <div class="task-left-side">
                <input class="task-checkbox" type="checkbox" name="" id="${e.taskId}">
                <div class="task-title">${e.name}</div>
            </div>
            <div class="task-right-side">
                <div class="task-date-wrapper"><input type="date" name="" id="${e.taskId}"  class="task-date" value="${e.dueDate}"> <img class="date-edit-icon" src="./checked2-icon.png" alt="" id="${e.taskId}"></div>
                <div class="remove-task-btn" id="${e.taskId}">\u2716</div>
            </div>                
        </div> `;u(d)})};let f=String(new Date().getDate()).padStart(2,"0"),y=String(new Date().getMonth()+1).padStart(2,"0"),P=new Date().getFullYear();const L=()=>(()=>{document.querySelector(".menu-icon-wrapper").addEventListener("mouseup",a=>{document.querySelector(".sidebar").classList.toggle("hidden-menu")}),document.querySelector(".menu-icon-wrapper-mobile").addEventListener("mouseup",a=>{document.querySelector(".sidebar-mobile").classList.toggle("hidden-menu")});const e=()=>{document.querySelector(".sidebar-input").value="",document.querySelector(".sidebar-mobile-input").value="",document.querySelector(".new-task-name-input").value="",document.querySelector(".new-task-date").value=""};document.querySelectorAll(".add-project-btn").forEach(a=>{a.addEventListener("mouseup",n=>{document.querySelectorAll(".new-project").forEach(l=>{l.classList.toggle("hidden-btn")}),document.querySelectorAll(".add-project-btn").forEach(l=>{l.classList.toggle("hidden-btn")})})}),document.querySelectorAll(".add-btn").forEach(a=>{a.addEventListener("mouseup",n=>{document.querySelectorAll(".new-project").forEach(l=>{l.classList.toggle("hidden-btn")}),document.querySelectorAll(".add-project-btn").forEach(l=>{l.classList.toggle("hidden-btn")})})}),document.querySelectorAll(".cancel-btn").forEach(a=>{a.addEventListener("mouseup",n=>{document.querySelectorAll(".new-project").forEach(l=>{l.classList.toggle("hidden-btn")}),document.querySelectorAll(".add-project-btn").forEach(l=>{l.classList.toggle("hidden-btn")}),e()})}),document.querySelector(".add-normal").addEventListener("mouseup",a=>{document.querySelector(".sidebar-input").value===""||!/\S/.test(document.querySelector(".sidebar-input").value)||(t.storeProject(document.querySelector(".sidebar-input").value,t.allProjects.length),g.updateLocalStorage(),e(),o())}),document.querySelector(".add-mobile").addEventListener("mouseup",a=>{document.querySelector(".sidebar-mobile-input").value===""||!/\S/.test(document.querySelector(".sidebar-mobile-input").value)||(t.storeProject(document.querySelector(".sidebar-mobile-input").value,t.allProjects.length),g.updateLocalStorage(),e(),o())});const d=()=>{document.querySelectorAll(".projects").forEach(a=>{a.addEventListener("mouseup",n=>{n.target.innerText!=="\u2716"&&(document.querySelector(".selected-project-title").innerHTML=t.getProjectName(t.getProjectIndex(Number(n.target.id))),t.selectedProjectIndex=t.getProjectIndex(Number(n.target.id)),m())})})};d();const p=()=>{document.querySelectorAll(".remove-project-btn").forEach(a=>{a.addEventListener("mouseup",n=>{t.deleteProject(Number(n.target.id)),g.updateLocalStorage(),o()})})};p(),document.querySelector(".confirm-new-task-btn").addEventListener("mouseup",a=>{if(document.querySelector(".new-task-name-input").value===""||!/\S/.test(document.querySelector(".new-task-name-input").value)){i(),e();return}if(t.selectedProjectIndex===void 0){i(),e();return}k.storeTask(document.querySelector(".new-task-name-input").value,document.querySelector(".new-task-date").value=`${P}-${y}-${f}`,t.allProjects[t.selectedProjectIndex].tasks.length),g.updateLocalStorage(),e(),i(),m()});const s=()=>{document.querySelectorAll(".task-checkbox").forEach(a=>{a.addEventListener("mouseup",n=>{k.updateTaskStatus(Number(n.target.id)),g.updateLocalStorage(),m()})})};s();const r=()=>{document.querySelectorAll(".date-edit-icon").forEach(a=>{a.addEventListener("mouseup",n=>{k.updateTaskDueDate(Number(n.target.id),n.target.previousElementSibling.value),m()})})};r();const c=()=>{document.querySelectorAll(".remove-task-btn").forEach(a=>{a.addEventListener("mouseup",n=>{k.deleteTask(Number(n.target.id)),g.updateLocalStorage(),m()})})};c();const i=()=>{document.querySelector(".add-task-modal").classList.toggle("hidden-modal"),document.querySelector(".header").classList.toggle("blur-background"),document.querySelector(".main").classList.toggle("blur-background")};document.querySelector(".add-task-btn").addEventListener("mouseup",a=>{i()}),document.querySelector(".close-modal-btn").addEventListener("mouseup",a=>{i(),e()}),document.querySelector(".cancel-new-task-btn").addEventListener("mouseup",a=>{e(),i()});const v=()=>{const a=()=>{document.querySelector(".highlighted-project")&&document.querySelector(".highlighted-project").classList.remove("highlighted-project")};document.querySelectorAll(".projects").forEach(n=>{n.addEventListener("mouseup",l=>{l.target.classList.contains("project-name")?(a(),l.target.parentNode.classList.add("highlighted-project")):l.target.classList.contains("remove-project-btn")||l.target.classList.contains("remove-project-btn-wrapper")||(a(),l.target.classList.add("highlighted-project"))})})};v();const o=()=>{j(),d(),v(),p()},m=()=>{S(),r(),s(),c()}})(),I=()=>{document.querySelector("#app").innerHTML=h(),j(),L()};I();
