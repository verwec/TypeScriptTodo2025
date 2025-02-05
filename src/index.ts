import { loadTasks, saveTasks } from './storage';
import * as readlineSync from 'readline-sync';
import { Task } from './types';


let tasks = loadTasks();

function showTasks(): void {
    console.log("\n📝 Deine Aufgaben:");
    tasks.forEach(task => {
        const priorityEmoji = {
            niedrig: "⬇️",
            mittel: "➡️",
            hoch: "⬆️"
        }[task.priority];
        
        console.log(`[${task.id}] [${task.completed ? "✅" : "❌"}] ${priorityEmoji} ${task.title}`);
        task.subtasks?.forEach(subtask => {
            const subPriorityEmoji = {
                niedrig: "⬇️",
                mittel: "➡️",
                hoch: "⬆️"
            }[subtask.priority];
            console.log(`  └─ [${subtask.id}] [${subtask.completed ? "✅" : "❌"}] ${subPriorityEmoji} ${subtask.title}`);
        });
    });
}

function addTask(): void {
    const title = readlineSync.question("Gib eine neue Aufgabe ein: ");
    const newTask: Task = {
        id: (tasks.length + 1).toString(),
        title,
        completed: false,
        priority: "mittel"
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`✅ Aufgabe "${title}" hinzugefügt.`);
}

function completeTask(): void {
    showTasks();
    const id = readlineSync.question("\nWelche Aufgabe wurde erledigt? (ID eingeben): ");
    
    // Suche in Hauptaufgaben
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        saveTasks(tasks);
        console.log(`🎉 Aufgabe "${task.title}" als erledigt markiert!`);
        return;
    }

    // Suche in Subtasks
    for (const mainTask of tasks) {
        const subtask = mainTask.subtasks?.find(st => st.id === id);
        if (subtask) {
            subtask.completed = true;
            saveTasks(tasks);
            console.log(`🎉 Unteraufgabe "${subtask.title}" als erledigt markiert!`);
            return;
        }
    }

    console.log("❌ Keine Aufgabe mit dieser ID gefunden.");
}

function mainMenu(): void {
    while (true) {
        console.log("\n📌 Menü:");
        console.log("1️⃣ Aufgabe hinzufügen");
        console.log("2️⃣ Aufgabe als erledigt markieren");
        console.log("3️⃣ Alle Aufgaben anzeigen");
        console.log("4️⃣ Beenden");

        const option = readlineSync.questionInt("Wähle eine Option: ");

        if (option === 1) addTask();
        else if (option === 2) completeTask();
        else if (option === 3) showTasks();
        else if (option === 4) {
            console.log("👋 Programm beendet.");
            break;
        } else {
            console.log("❌ Ungültige Option.");
        }
    }
}

// Start
console.log("🚀 Task Manager gestartet!");
mainMenu();