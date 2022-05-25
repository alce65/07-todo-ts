/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { Component } from './component.js';

export class Todo extends Component implements iComponent {
    tasks: Array<Task>;
    constructor(public selector: string) {
        super();
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
    private manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    private handlerButton(ev: Event) {
        const deletedId = (<HTMLElement>ev.target).dataset.id;
        console.log('click', deletedId);
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
    }
}
