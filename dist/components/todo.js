import { TASKS } from '../models/data.js';
import { Component } from './component.js';
export class Todo extends Component {
    selector;
    tasks;
    constructor(selector) {
        super();
        this.selector = selector;
        this.tasks = TASKS;
        this.template = this.createTemplate();
        this.render(selector);
        this.manageComponent();
    }
    createTemplate() {
        let html = `
        <h2>ToDo list</h2><ul class="task-list">`;
        this.tasks.forEach((item) => {
            html += `<li>
            <span><input type="checkbox" ${item.isComplete && 'checked'}></span>
            <span>${item.name}</span>
            <span> - </span> 
            <span>${item.responsible}<span>
            <span class="button" role="button" 
            data-id="${item.id}">🗑️</span>
            </li>`;
        });
        html += `</ul>`;
        return html;
    }
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
    }
    handlerButton(ev) {
        const deletedId = ev.target.dataset.id;
        console.log('click', deletedId);
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
    }
}
