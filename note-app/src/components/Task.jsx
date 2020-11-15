import React from 'react';
import '../csss/flex.css'
import '../csss/task.css'

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: props.content,
            selectStatus: props.selectStatus,
            deleteTaskHandler: props.deleteTaskHandler,
            options: [
                {
                    id: 0,
                    name: 'TO DO',
                    className: 'options-to-do',
                },
                {
                    id: 1,
                    name: 'IN PROGRESS',
                    className: 'options-in-progress', 
                },
                {
                    id: 2,
                    name: 'PENDING', 
                    className: 'options-pending',
                },
                {
                    id: 3,
                    name: 'CLOSE', 
                    className: 'options-close',
                },
                {
                    id: 4,
                    name: 'ABSOLUTE', 
                    className: 'options-absolute',
                }]
        }
    }

    selectOnChange = (event) => {
        let value = event.target.value;
        this.setState({
            selectStatus: value,
        })
    }

    getSelectElement = () => {
        let className = "task-select " + this.state.options[this.state.selectStatus].className;
        
        return(
            <select 
                className={className}
                onChange={this.selectOnChange}
            >
                {this.state.options.map(o => {
                    if(o.id == this.state.selectStatus) {
                        return (
                            <option key={o.id} id={o.id} value={o.id} selected="selected"> {o.name} </option>
                        )    
                    }
                    return (
                        <option key={o.id} id={o.id} value={o.id}> {o.name} </option>
                    )
                })}
            </select>
        );
    }

    render(){
        return (
            <div className="task-container flex-row">
                <p className="task-content"> {this.state.content} </p>
                <div className="task-left-side flex-column">
                    <button onClick={this.state.deleteTaskHandler}> X </button>
                    {this.getSelectElement()}
                </div>
            </div>
        );
    }
}

export default Task;