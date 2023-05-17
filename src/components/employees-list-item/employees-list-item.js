
import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name, salary, onDelite, onToggleIncreace, onToggleRise, increase, rise} = props;
        let classIncrease = "list-group-item d-flex justify-content-between";
        if(increase) {
            classIncrease += " increase"
        }
        if(rise) {
            classIncrease += " like";
        }

        return (
            <li className={classIncrease}>
                <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncreace} >
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelite}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

}

export default EmployeesListItem;