import React from 'react';
import initialState from './initialState'
import './App.css';
import Calendar from './components/calendar';

class App extends React.Component {
  state = initialState;

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <Calendar days={this.state.days} />
      </div>
    );
  }
}

export default App;
