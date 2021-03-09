import "./navbar.css";

export default function Navbar({navbarItem, setNavbarItem}) {

    return (
        <div className="navbar">
            <label>
                <input type="radio" 
                       name="navbar--item"
                       value="projects"
                       checked={navbarItem === "projects"}
                       onChange={setNavbarItem}/>
                       Projects
            </label>
            <label>
                <input type="radio" 
                       name="navbar--item"
                       value="employees"
                       checked={navbarItem === "employees"}
                       onChange={setNavbarItem}/>
                       Employees
            </label>
            <label>
                <input type="radio" 
                       name="navbar--item"
                       value="tasks"
                       checked={navbarItem === "tasks"}
                       onChange={setNavbarItem}/>
                       Tasks
            </label>
        </div>
    );
}