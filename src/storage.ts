import * as fs from 'fs';
import { TaskLoader, TaskSaver } from './types';

const STORAGE_FILE = 'tasks.json';

export const loadTasks: TaskLoader = () => {
    try {
        const data = fs.readFileSync(STORAGE_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

export const saveTasks: TaskSaver = (tasks) => {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(tasks, null, 2));
};