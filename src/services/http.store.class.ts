import { TaskModel } from '../models/task';

export class HttpStoreClass {
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }
    getTasks(): Promise<Array<TaskModel>> {
        // GET
        return fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
    getTask(task: TaskModel): Promise<TaskModel> {
        // GET
        return fetch(this.url + `/${task.id}`).then((resp) => resp.json());
    }
    setTask(task: TaskModel): Promise<TaskModel> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateTask() {
        // PUT / PATCH
    }
    deleteTask() {
        // DELETE
    }
}
