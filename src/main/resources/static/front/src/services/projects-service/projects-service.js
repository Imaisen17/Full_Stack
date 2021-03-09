export default class ProjectsService {

    _PROJECTS_API_BASE_URL = "http://localhost:8080/api/projects";

    getEmployees = async () => {
        const res = await fetch(`${this._PROJECTS_API_BASE_URL}`);
        return await res.json();
    }

    getEmployee = async (id) => {
        const res = await fetch(`${this._PROJECTS_API_BASE_URL}/${id}`);
        return await res.json();
    }

    saveEmployee = async (project) => {
        const res = await fetch(`${this._PROJECTS_API_BASE_URL}`,
                                {
                                    method: project.id ? "PUT" : "POST",
                                    headers: {"Accept": "application/json",
                                              "Content-Type": "application/json"
                                              },
                                    body: JSON.stringify(project)
                                });
        return await res.json();
    }

    deleteEmployee = async (id) => {
        const res = await fetch(`${this._PROJECTS_API_BASE_URL}/${id}`, {method: "DELETE"});
        return await res.json();
    }
}