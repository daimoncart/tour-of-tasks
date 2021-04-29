export interface Task {
    id?: number;
    name: String;
    description: String;
    worth: number;
    randomPriority?: number
}

export interface TaskConstructor {
    new (name: String, description: String, worth: number): Task;
    clone(): Task;
}