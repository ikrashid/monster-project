import React, {Component} from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({monsters: response}));
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }
  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' searchHandler = {this.handleChange}/>
        <CardList monsters = {filteredMonsters}></CardList>        
      </div>
    );
  }
}

export default App;
