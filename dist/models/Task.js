/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';
// export interface iTask {
//     id: string;
//     name: string;
//     responsible: string;
//     isComplete: boolean;
// }
// (false);implements iTask
export class Task {
    name;
    responsible;
    id;
    isComplete;
    constructor(name, responsible) {
        this.name = name;
        this.responsible = responsible;
        this.id = this.generateId();
        this.isComplete = false;
    }
    generateId() {
        return uuidv4();
    }
}
