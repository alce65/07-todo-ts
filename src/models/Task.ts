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
    id: string;
    isComplete: boolean;
    constructor(public name: string, public responsible: string) {
        this.id = this.generateId();
        this.isComplete = false;
    }
    private generateId(): string {
        return uuidv4();
    }
}
