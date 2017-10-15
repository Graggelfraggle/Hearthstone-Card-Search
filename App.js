import React, { Component } from 'react';
import CategorySelector from './CategorySelector.js';
import './App.css';
import CardSearch from './CardSearch.js';

class App extends Component {
  constructor(){
    super();
    

  this.state={
    setStyle:'CardSetH',
    classStyle:'ClassH',
    rarStyle:'RarityH',
    cardSetChoice:null,
    classChoice:null,
    rarityChoice:null,
    searchTerm:'argent',

  }
 
  }

  cardSet() { 
      console.log()
      if (this.state.setStyle === 'CardSet'){
        this.setState({setStyle:'CardSetH'})
      }else{
        this.setState({setStyle:'CardSet'})
        this.setState({classStyle:'ClassH'})
        this.setState({rarStyle:'RarityH'})
    }
  }

  cardClass() { 
      if (this.state.classStyle === 'Class'){
        this.setState({classStyle:'ClassH'})
      }else{
        this.setState({classStyle:'Class'})
        this.setState({setStyle:'CardSetH'})
        this.setState({rarStyle:'RarityH'})
    }
  }

  cardRarity() { 
      if (this.state.rarStyle === 'Rarity'){
        this.setState({rarStyle:'RarityH'})
      }else{
        this.setState({rarStyle:'Rarity'})
        this.setState({setStyle:'CardSetH'})
        this.setState({classStyle:'ClassH'})
    }
  }

  appHandleSubmit(txt) {
        this.setState({searchTerm: txt});
        console.log(txt);
    }
  
  




  render() {
    return (
      <div className="App">
        
        <h1>Hearthstone Search Tool</h1>

        
        <CategorySelector onChange={term => this.appHandleSubmit(term)} searchTerm={this.state.searchTerm} cardSet={this.state.setStyle} cardSetClick={()=>this.cardSet()} cardClassClick={()=>this.cardClass()} cardClass={this.state.classStyle} cardRarityClick={()=>this.cardRarity()} cardRarity={this.state.rarStyle}/>
        <CardSearch searchTerm={this.state.searchTerm}/>

      </div>
    );
  }
}

export default App;
