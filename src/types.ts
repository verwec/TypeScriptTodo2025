export type Priority = "niedrig" | "mittel" | "hoch";

export type Task = {
    id: string;
    title: string;
    completed: boolean;
    priority: Priority;
}
