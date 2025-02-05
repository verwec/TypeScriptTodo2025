import * as fs from 'fs';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

const STORAGE_FILE = 'tasks.json';

export function loadTasks(): Task[] {
    try {
        const data = fs.readFileSync(STORAGE_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export function saveTasks(tasks: Task[]): void {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(tasks, null, 2));
}