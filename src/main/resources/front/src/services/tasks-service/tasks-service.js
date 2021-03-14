export default class TasksService {

    _TASKS_API_BASE_URL = "http://localhost:8080/api/tasks";

    getEmployees = async () => {
        const res = await fetch(`${this._TASKS_API_BASE_URL}`);
        return await res.json();
    }

    getEmployee = async (id) => {
        const res = await fetch(`${this._TASKS_API_BASE_URL}/${id}`);
        return await res.json();
    }

    saveEmployee = async (task) => {
        const res = await fetch(`${this._TASKS_API_BASE_URL}`,
                                {
                                    method: task.id ? "PUT" : "POST",
                                    headers: {"Accept": "application/json",
                                              "Content-Type": "application/json"
                                              },
                                    body: JSON.stringify(task)
                                });
        return await res.json();
    }

    deleteEmployee = async (id) => {
        const res = await fetch(`${this._TASKS_API_BASE_URL}/${id}`, {method: "DELETE"});
        return await res.json();
    }
}