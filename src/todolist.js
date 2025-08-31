
export const todolist = {
    Projects: [
        {
            projectName: "Domácí práce",
            todos: [
                {
                    name: "Uklidit pokoj",
                    dueDate: "2025-09-05",
                    completed: false
                },
                {
                    name: "Vyprat prádlo",
                    dueDate: "2025-09-03",
                    completed: true
                }
            ]
        },
        {
            projectName: "Práce",
            todos: [
                {
                    name: "Dokončit zprávu",
                    dueDate: "2025-09-01",
                    completed: false
                },
                {
                    name: "Schůzka s klientem",
                    dueDate: "2025-09-02",
                    completed: false
                }
            ]
        }
    ]
};

export function saveToLocalStorage() {
    try {
        localStorage.setItem('todolist', JSON.stringify(todolist));
    } catch (error) {
        console.error('Chyba při ukládání do localStorage:', error);
    }
}

export function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('todolist');
        if (saved) {
            const parsed = JSON.parse(saved);
            todolist.Projects = parsed.Projects || [];
        }
    } catch (error) {
        console.error('Chyba při načítání z localStorage:', error);
    }
}

loadFromLocalStorage();