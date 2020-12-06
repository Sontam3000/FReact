import React , { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list';
import  './components/card-list/card-list.css';
import './components/search-box/searcbox.component';
import { SearchBox } from './components/search-box/searcbox.component';

class App extends Component{
  constructor(){
    super();

    this.state= {
      guitars:[
        {
          name:'Stratocaster',
          image:'guitar/strat.jpg',
          id:'1'
        },
        {
          name:'Superstrat',
          image:'guitar/superstrat.jpg',
          id:'2'
        },
        {
          name:'Telecaster',
          image:'guitar/telecaster.jpg',
          id:'3'
        },
        {
          name:'LesPaul',
          image:'guitar/lespaul.jpg',
          id:'4'
        },
        {
          name:'SG',
          image:'guitar/sg.jpg',
          id:'5'
        },  
        {
          name:'Flying V',
          image:'guitar/v.jpg',
          id:'6'
        },
        {
          name:'Semi-Hollow',
          image:'guitar/semihollow.jpg',
          id:'7'
        },
        {
          name:'Hollow',
          image:'guitar/hollow.jpg',
          id:'8'
        },
        {
          name:'Acoustic',
          image:'guitar/acoustic.jpg',
          id:'9'
        },
        {
          name:'Semi Acoustic',
          image:'guitar/semiacoustic.jpg',
          id:'10'
        },
        {
          name:'Clasical',
          image:'guitar/classical.jpg',
          id:'11'
        },
        {
          name:'12strings',
          image:'guitar/12string.jpg',
          id:'12'
        },
        {
          name:'Steel ',
          image:'guitar/steel.jpg',
          id:'13'
        },
        {
          name:'Archtop ',
          image:'guitar/archtop.jpg',
          id:'14'
        },
        {
          name:'Resonator ',
          image:'guitar/resonator.jpg',
          id:'15'
        },
      ],
      searchField:''
    }; 
  }
  handleChange=(e) => {
    this.setState({searchField:e.target.value});
    };
  render(){
    const { guitars, searchField }= this.state; 
    const filteredGuitars= guitars.filter(guitar=>
      guitar.name.toLocaleLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Guitar Types</h1>
        <SearchBox placeholder='Search Guitar..'  handleChange={this.handleChange} />
          <CardList  guitars={filteredGuitars} /> 
        
      </div>
    );
  }
}

export default App;
