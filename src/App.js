import React, {Component} from 'react';
import {render} from 'react-dom';
import Navbar from './components/Navbar'
import Counters from './components/counters';
class App extends Component{
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters: counters})

  }
  handleDelete = (counterId) => {
    const counter = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counter})
  }
  handleReset = () => {
    const counter = this.state.counters.map(c => {c.value = 0; return c});
    this.setState({counters: counter})
  }
  render(){
    return(
      <div>
      <Navbar totalValue = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters counters = {this.state.counters} onIncrement= {this.handleIncrement} onDelete= {this.handleDelete} onReset= {this.handleReset}/>
      </main>
      </div>
    )
  }
}

export default App;
