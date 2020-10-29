import React, {Component} from 'react';
import Counter from './counter';
import './common.css'
class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters :[
                {
                    key: 1,
                    start: 1,
                },
                {
                    key: 2,
                    start: 1,
                },
                {
                    key: 3,
                    start: 1,
                },
            ],
        }    
    }

    deleteAll = () => {
        var newCounter = this.state.counters.map(c => {
            return {
                key: c.key,
                value: 0,
            }
        });

        this.setState(
            {
                counters: newCounter,
            }
        )
    }

    render() {
        console.log(this.state.counters);
        return(
            <div>
                {this.state.counters.map(c => {
                    return <Counter key={c.key} value={c.start} />
                })}

                <button class="danger button" onClick={this.deleteAll}> Delete All </button>
            </div>
        )
    }

}

export default Counters;