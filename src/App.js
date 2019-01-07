import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

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

    let persons = null;

    if ( this.state.showPersons ) {
       persons = (
              <div>
                {this.state.persons.map(person => {
                  return <Person 
                          name={person.name}
                          age={person.age} />
                })}

              
              </div>

            );
    }
    
    return (
      <div className="App">
          <h1> Hi, I'm a React App </h1>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

          {persons}

      </div> 
    );
  }
}

export default App;
