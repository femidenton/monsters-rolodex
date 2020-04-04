import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';



class App extends Component{

  constructor(){
    super(); //calls the constructor method on the Component class
    this.state = {
      monster: [],
      searchFilter: ''
    }
  }
  componentDidMount(){//Lifecycle method
    const link = 'https://jsonplaceholder.typicode.com/users';
    fetch(link)
    .then(response => response.json())//feches the users from an api
    .then(user => this.setState({monster : user}));// appends state by adding a user/monster into the monster array in the state
  }

  handleChange =(e) =>{
     this.setState({searchFilter : e.target.value})
  }

  render() {
    const { monster, searchFilter  } = this.state
    const filteredMonsters = monster.filter(monster =>monster.name.toLowerCase().includes(searchFilter.toLowerCase()))//a new array that filters the content (name) of the monster, turns to lowercase and compares it with the search field content. This is the logic for the search
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder="Search Monsters"// send as props to the searchNox component
        handleChange={this.handleChange}//append the searchField property in the state object with the value of the search box. event e is passed in order to target the element 
        />
     
         <CardList monster = {filteredMonsters}> {/*sending the state object as a prop into the child component, ie CardList */}
           
    
        </CardList>
        
      </div>
    );
  }
}

export default App;
