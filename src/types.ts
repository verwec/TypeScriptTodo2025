export enum Priority {
    NIEDRIG = "niedrig",
    MITTEL = "mittel",
    HOCH = "hoch"
}

export interface BaseTask {
    id: string;
    title: string;
    completed: boolean;
    priority: Priority;
}

export interface Task extends BaseTask {
    subtasks?: SubTask[];
}

export interface SubTask extends BaseTask {
    // Additional fields specific to subtasks can be added here if needed
}

// Funktionstypen für Storage
export type TaskLoader = () => Task[];
export type TaskSaver = (tasks: Task[]) => void;