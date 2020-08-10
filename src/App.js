import React from 'react';
import initialState from './initialState'
import './App.css';
import Calendar from './components/calendar';
import Lists from './components/lists';

class App extends React.Component {
  state = initialState;

  addMealItem = (event) => {
    console.log(event.target.dataset.day, event.target.dataset.meal)
  }
  
  addListItem = (event) => {
    console.log(event.target.dataset.list)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        < Calendar days={this.state.days} addMealItem={this.addMealItem} />
        < Lists lists={this.state.lists} addListItem={this.addListItem} />
      </div>
    );
  }
}

export default App;
