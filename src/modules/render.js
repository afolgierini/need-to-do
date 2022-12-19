import { renderDefault } from './default'
import { eventHandler as addDomEvents } from './event-handler'
import { renderProjects } from './render-projects';

export const render = () => {  
    document.querySelector('#app').innerHTML = renderDefault();
    
    renderProjects()
    addDomEvents()
}

