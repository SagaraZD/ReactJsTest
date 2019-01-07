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

    deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
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
                {this.state.persons.map( (person, index) => {
                  return <Person
                          click = {() => this.deletePersonHandler(index)}
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
