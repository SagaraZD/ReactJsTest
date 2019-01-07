import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons: [
        {name: 'Sagara', age:28},
        {name: 'Ganushka', age:29},
        {name: 'Max', age:30}
      ],
      showPerson : false,
    }

    switchNameHandler =(event) =>{
      //console.log('Was clicked!');
      this.setState(
        {
          persons: [
            {name: 'Sagara', age:28},
            {name: event.target.value, age:29},
            {name: 'Max', age:35},
          ]
          
        }
      )
    }

    togglePersonHandler =() =>{
      const doseShow = this.state.showPersons;
      this.setState({showPersons: !doseShow});
    }

  render() {

    const style = {
      backgroundColor: 'blue',
      border: 'none',
      padding: '20px 10px',
      color: '#fff',
      fontSize: '12px',
      cursor: 'pointer',
    };    
    
    return (
      <div className="App">
          <h1> Hi, I'm a React App </h1>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

        {
          this.state.showPersons === true ?
          <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}> First child  </Person>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Ganushka')}
          change={this.switchNameHandler}>My Hobbies: Racing </Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>  Watch 037</Person>
          </div> : null 
        }

      </div> 
    );
  }
}

export default App;
