import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot } from 'radium'

class App extends Component {

    state = {
      persons: [
        {id: 'asdf', name: 'Sagara', age:28},
        {id: 'dsfa', name: 'Ganushka', age:29},
        {id: 'werw', name: 'Max', age:30}
      ],
      showPerson : false,
    }

    nameChangeHandler = ( event, id ) => {
      const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
      });

      const person = { 
        ...this.state.persons[personIndex] 
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( { persons: persons } );

    }

    deletePersonHandler = (personIndex) => {
     // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }


    togglePersonHandler =() =>{
      const doseShow = this.state.showPersons;
      this.setState({showPersons: !doseShow});
    }

  render() {

    const style = {
      backgroundColor: 'green',
      border: 'none',
      color:'white',
      padding: '20px 10px',
      fontSize: '12px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };  

    let persons = null;

    if ( this.state.showPersons ) {
       persons = (
              <div>
                {this.state.persons.map( (person, index) => {
                  return <Person
                          click = {() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age} 
                          key ={person.id}
                          change = {(event)=> this.nameChangeHandler(event, person.id)}
                          />
                  })}
              </div>
            );
            style.backgroundColor='red';
            style[':hover'] = {
              backgroundColor: 'salmon',
              color: 'black'
            }
    }

    //let classes = ['red', 'bold'].join(' ');
    
    const classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

    
    return (
      <StyleRoot> 
      <div className="App">
          <h1> Hi, I'm a React App </h1>
          <p className={classes.join(' ')}> This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

          {persons}

      </div> 
      </StyleRoot>
    );
  }
}

export default Radium (App) ;
