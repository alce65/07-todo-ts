/* eslint-disable no-unused-vars */
import { v4 as uuid } from 'uuid';

// export interface iTask {
//     id: string;
//     name: string;
//     responsible: string;
//     isComplete: boolean;
// }

// (false);implements iTask

export class Task {
    id: string;
    isComplete: boolean;
    constructor(public name: string, public responsible: string) {
        this.id = this.generateId();
        this.isComplete = false;
    }
    private generateId(): string {
        // error
        // return uuid();
        return String(Math.floor(Math.random() * 10_000_000));
    }
}
