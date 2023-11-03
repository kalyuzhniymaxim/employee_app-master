import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList=({data, onDelete, onToggle, onChangeSalary})=>{

    const employees=data.map(el => {
        const {id, ...vals}=el;
        return (<EmployeesListItem 
            key={id} 
            {...vals}
            onDelete={()=>onDelete(id)}
            onToggle={(e)=>onToggle(id, e.currentTarget.getAttribute("data-toggle"))}
            onChangeSalary={(e)=>onChangeSalary(id, e.target.value)}
            />);
    });

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    );
};

export default EmployeesList;