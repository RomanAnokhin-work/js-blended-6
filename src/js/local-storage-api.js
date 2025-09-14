const key = 'tasks';
const themeKey = 'theme';

export function setTask(task) {
    const tasks = JSON.parse(localStorage.getItem(key)) || [];

    tasks.push(task)

    localStorage.setItem(key, JSON.stringify(tasks));
}

export function removeTask(index) {
    const savedTasks = localStorage.getItem(key);

    if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);

        const filterTasks = parsedTasks.filter((task, i) => i !== index);

        localStorage.setItem(key, JSON.stringify(filterTasks));
    }
}

export function getTasks() { 
    const savedTasks = localStorage.getItem(key);

    if (savedTasks) { 
        const parsedTasks = JSON.parse(savedTasks);

        return parsedTasks;
        
    }
}

export function setTheme(themeValue) {

    localStorage.setItem(themeKey, JSON.stringify(themeValue));
}

export function getTheme() {
    const savedTheme = localStorage.getItem(themeKey);

    if (savedTheme) {
        const parsedTheme = JSON.parse(savedTheme);

        return parsedTheme;
    }
}