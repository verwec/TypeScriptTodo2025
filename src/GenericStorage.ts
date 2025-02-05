import { Task, Priority } from './types';

class GenericStorage<T> {
    private items: T[] = [];

    public load(): T[] {
        return this.items;
    }

    public save(items: T[]): void {
        this.items = [...items];
    }

    public add(item: T): void {
        this.items.push(item);
    }
}

// Verwendung für Tasks
const taskStorage = new GenericStorage<Task>();
taskStorage.add({
    id: "1",
    title: "Test",
    completed: false,
    priority: Priority.MITTEL
});

// Könnte auch für andere Typen verwendet werden
interface User {
    id: string;
    name: string;
}
const userStorage = new GenericStorage<User>(); 