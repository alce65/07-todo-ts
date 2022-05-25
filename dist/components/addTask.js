import { Task } from '../models/task.js';
import { Component } from './component.js';
export class AddTask extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        this.manageComponent();
    }
    createTemplate() {
        return `
        <h3>Añadir tarea</> 
        <form action="">
            <input type="text" name="name" id="name"
            placeholder="describe la tarea">
            <input type="text" name="responsible" 
            placeholder="responsable de la tarea"
            id="responsible">
            <button type="submit">Guardar</button>
        </form>
        `;
    }
    manageComponent() {
        document
            .querySelector('form')
            ?.addEventListener('submit', this.handlerSubmit.bind(this));
    }
    handlerSubmit(ev) {
        let data = {};
        ev.preventDefault();
        document.querySelectorAll('form input').forEach((item) => {
            const field = item.name;
            if (typeof item.value === 'string') {
                data[field] = item.value;
            }
        });
        console.log('Guardado', new Task(data.name, data.responsible));
    }
}
