import { HttpStoreClass } from '../services/http.store.class.js';
import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemTask } from './task.js';
export class TodoList extends Component {
    selector;
    tasks;
    constructor(selector) {
        super();
        this.selector = selector;
        new HttpStoreClass().getTasks().then((tasks) => {
            this.tasks = tasks;
            this.updateComponent();
        });
    }
    createTemplate() {
        let html = `
        <h2>ToDo list</h2>
        <slot class="addTask"></slot>
        <ul class="task-list">`;
        this.tasks.forEach((item) => {
            html += new ItemTask('', item).template;
        });
        html += `</ul>`;
        return html;
    }
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) => item.addEventListener('change', this.handlerChange.bind(this)));
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        new AddTask('slot.addTask', this.addTask.bind(this));
    }
    handlerButton(ev) {
        const deletedId = ev.target.dataset.id;
        console.log('click', deletedId);
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.updateComponent();
    }
    handlerChange(ev) {
        const changeId = ev.target.dataset.id;
        console.log('change', changeId);
        this.tasks = this.tasks.map((item) => ({
            ...item,
            isComplete: item.id === changeId ? !item.isComplete : item.isComplete,
        }));
        this.updateComponent();
    }
    addTask(task) {
        // this.tasks = [...this.tasks, task];
        new HttpStoreClass().setTask(task).then((task) => {
            this.tasks.push(task);
            this.updateComponent();
        });
    }
}
