import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelite, onToggleIncreace, onToggleRise}) => {

    const elements = data.map(item=> {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id}
            {...itemProps}
            onDelite={() => onDelite(id)}
            onToggleIncreace={() => onToggleIncreace(id)}
            onToggleRise={()=> onToggleRise(id)} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;