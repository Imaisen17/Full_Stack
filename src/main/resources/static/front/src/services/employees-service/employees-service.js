export default class EmployeesService {

    _EMPLOYEES_API_BASE_URL = "http://localhost:8080/api/employees";

    getEmployees = async () => {
        const res = await fetch(`${this._EMPLOYEES_API_BASE_URL}`);
        return await res.json();
    }

    getEmployee = async (id) => {
        const res = await fetch(`${this._EMPLOYEES_API_BASE_URL}/${id}`);
        return await res.json();
    }

    saveEmployee = async (employee) => {
        const res = await fetch(`${this._EMPLOYEES_API_BASE_URL}`,
                                {
                                    method: employee.id ? "PUT" : "POST",
                                    headers: {"Accept": "application/json",
                                              "Content-Type": "application/json"
                                              },
                                    body: JSON.stringify(employee)
                                });
        return await res.json();
    }

    deleteEmployee = async (id) => {
        const res = await fetch(`${this._EMPLOYEES_API_BASE_URL}/${id}`, {method: "DELETE"});
        return await res.json();
    }
}