import React from 'react';
import initialState from './initialState'
import './App.css';
import Calendar from './components/calendar';
import Lists from './components/lists';

class App extends React.Component {
  state = initialState;

  addMealItem = (event) => {
    const dayIndex = event.target.dataset.dayIndex
    const mealIndex = event.target.dataset.mealIndex

    let days = this.state.days
    days[dayIndex][mealIndex].items.push("")
    this.setState({days})
  }

  editMealItem = (event) => {
    const dayIndex = event.target.dataset.dayIndex
    const mealIndex = event.target.dataset.mealIndex
    const mealItemIndex = event.target.dataset.mealItemIndex

    let days = this.state.days


    this.setState({days})
  }
  
  addListItem = (event) => {
    const listIndex = event.target.dataset.listIndex

    let lists = this.state.lists
    lists[listIndex].items.push({name: "", quantity: 1})
    this.setState({lists})
  }

  editListItem = (event) => {
    const listIndex = event.target.dataset.listIndex
    const listItemIndex = event.target.dataset.listItemIndex

    let lists = this.state.lists


    this.setState({lists})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        < Calendar
          days={this.state.days}
          addMealItem={this.addMealItem}
          editMealItem={this.editMealItem}
        />
        < Lists
          lists={this.state.lists}
          addListItem={this.addListItem}
          editListItem={this.editListItem}
        />
      </div>
    );
  }
}

export default App;
