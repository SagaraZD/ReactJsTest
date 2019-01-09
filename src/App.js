import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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
    let persons = null;
    let btnClass = '';

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
            btnClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' ');
    
    const Assignedclasses = [];
    if (this.state.persons.length <=2){
      Assignedclasses.push(classes.red);
    }
    if (this.state.persons.length <=1) {
      Assignedclasses.push(classes.bold);
    }

    
    return (

      <div className={classes.App}>
          <h1> Hi, I'm a React App </h1>
          <p className={Assignedclasses.join(' ')}> This is really working!</p>
          <button 
            className={btnClass} 
            onClick={this.togglePersonHandler} >Switch Name</button>

          {persons}

      </div> 
   
    );
  }
}

export default App ;
