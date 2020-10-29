import  React,{Component} from 'react';
import './common.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value === undefined ? 0 : props.value,
    }
  }
  
  getCounter = () => {
    return this.state.value === 0 ? 'Zero' : this.state.value;
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    })
  }

  delete = () => {
    this.setState({
      value: 0,
    })
  }

  render() {
      return (
        <div>
          <span class="span-value"> {this.getCounter()} </span>
          <button class="button" onClick={this.increment}> Increment</button>
          <button class="button" onClick={this.delete}> Delete </button>
        </div>
      )
    }
}

export default Counter;
