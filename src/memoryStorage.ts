import { Task, TaskLoader, TaskSaver } from './types';

// Memory Storage Implementierung
let memoryTasks: Task[] = [];

export const loadTasks: TaskLoader = () => {
    return memoryTasks;
};

export const saveTasks: TaskSaver = (tasks) => {
    memoryTasks = [...tasks];
}; 