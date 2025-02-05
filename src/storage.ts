import * as fs from 'fs';
import { Task, Priority } from './types';

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