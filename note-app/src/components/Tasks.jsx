import React from 'react';
import Task from './Task';
import '../csss/flex.css';
import '../csss/base.css';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secret: props.secret,
            tasks: Array(0),
            errors: null,
            firstIndex: null,
            secondIndex: null,
        }
    }

    getTasks = () => {
        return(
            <div className="tasks-container flex-column">
                {this.state.tasks.map((task, index) => {
                    if(index === this.state.firstIndex || index === this.state.secondIndex) {
                        return(
                            <Task 
                                selectStatus={task.status % 5} 
                                content={task.content}
                                deleteTaskHandler={() => this.deleteTaskHandler(task.id)} 
                            />     
                        )
                    }
                })}
            </div>
        )
    }

    deleteTaskHandler = (taskID) => {
        console.log('delete task_id ' + taskID);
        let deleteURL = `https://${this.state.secret}.mockapi.io/tasks`
        fetch(deleteURL, {
            method: 'OPTIONS',
            headers: new Headers({
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            })
        })
        .then(r => r.json())
        .then(resp => {
            console.log('delete task success');
        })
        .catch(err => {
            console.log('delete task err', err);
        })
    }

    moveTaskBack = () => {
        let oldFirstIndex = this.state.firstIndex;
        if(oldFirstIndex === 0) {
            return
        }

        this.setState({
            firstIndex: oldFirstIndex - 2,
            secondIndex: oldFirstIndex - 1,
        })
    }

    moveTaskNext = () => {
        let oldFirstIndex = this.state.firstIndex;
        if(this.state.firstIndex === this.state.tasks.length - 1 || this.state.secondIndex === this.state.tasks.length - 1) {
            return
        }

        if(this.state.secondIndex + 2 === this.state.tasks.length) {
            this.setState ({
                firstIndex: this.state.tasks.length -1,
                secondIndex: null,
            })

            return
        }

        this.setState({
            firstIndex: oldFirstIndex + 2,
            secondIndex: oldFirstIndex + 3,
        })
    }

    componentDidMount(){
        let getURL = `https://${this.state.secret}.mockapi.io/tasks`
        fetch(getURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then(r => r.json())
        .then(resp => {
            console.log(resp);
            this.setState({
                tasks: resp,
                firstIndex: resp.length > 0 ? 0 : null,
                secondIndex: resp.length > 1 ? 1 : null,
            });
        })
        .catch(err => {
            this.setState({
                errors: err.message,
            })
        })
    }

    render(){
        if(this.state.errors) {
            return(
                <h2> Error: {this.state.errors} </h2>
            )
        }

        if(this.state.tasks.length === 0) {
            return(
                <h2> Loading </h2>
            );
        }

       return (
        <div className="flex-row" >
            <div className="triangle-left" onClick={this.moveTaskBack}></div>
            {this.getTasks()}
            <div className="triangle-right" onClick={this.moveTaskNext}></div>
            <button> Add Task </button>
        </div>
       ); 
    }
}

export default Tasks;