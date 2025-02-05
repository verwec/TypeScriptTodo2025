import { Task, TaskLoader, TaskSaver } from './types';

class MemoryStorage {
    private tasks: Task[] = [];

    public load(): Task[] {
        return this.tasks;
    }

    public save(tasks: Task[]): void {
        this.tasks = [...tasks];
    }
}

// Singleton-Instanz
const storage = new MemoryStorage();

// Export der Funktionen gemäß TaskLoader und TaskSaver Typen
export const loadTasks: TaskLoader = () => storage.load();
export const saveTasks: TaskSaver = (tasks) => storage.save(tasks); 