import React from 'react';
import initialState from './initialState'
import './App.css';
import Calendar from './components/calendar';
import Lists from './components/lists';

class App extends React.Component {
  state = initialState;

  addMealItem = (event) => {
    const dayIndex = event.target.dataset.dayIndex
    const meal = event.target.dataset.meal
    let days = this.state.days

    console.log(dayIndex, meal)

    if(meal === "Breakfast") {
      days[dayIndex].breakfastItems.push("")
    }
    else if(meal === "Lunch") {
      days[dayIndex].lunchItems.push("")
    }
    else if(meal == "Dinner") {
      days[dayIndex].dinnerItems.push("")
    }
    else {
      days[dayIndex].snackItems.push("")
    }

    this.setState({days})
  }
  
  addListItem = (event) => {
    const listIndex = event.target.dataset.listIndex
    let lists = this.state.lists
    lists[listIndex].items.push({name: "test", quantity: 100})

    this.setState({lists})
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
