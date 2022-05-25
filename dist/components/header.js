import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        return `
        <header>
            <h1>TODO List</h1>
        </header>
        `;
    }
}
