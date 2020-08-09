import React from 'react';
import initialState from './initialState'
import './App.css';
import Calendar from './components/calendar';
import Lists from './components/lists';

class App extends React.Component {
  state = initialState;

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        < Calendar days={this.state.days} />
        < Lists lists={this.state.lists} />
      </div>
    );
  }
}

export default App;
