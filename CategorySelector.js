import React, { Component } from "react";
import "./categoryselector.css";
import CardSearch from "./CardSearch.js";

class CategorySelector extends Component {
  constructor() {
    super();
    this.state = {
      setSelection: 0,
      setClass: 0,
      setRarity: 0,
      searchTerm: "argent"
    };
    this.onSetSelection = this.onSetSelection.bind(this);
    this.onClassSelection = this.onClassSelection.bind(this);
    this.onRaritySelection = this.onRaritySelection.bind(this);
    this.onInput = this.onInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  onSetSelection(event) {
    if (this.state.setSelection != event.target.dataset.set) {
      this.setState({ setSelection: event.target.dataset.set });
      this.setState({ setRarity: 0 });
      this.setState({ setClass: 0 });
    } else {
      this.setState({ setSelection: 0 });
    }
  }
  onClassSelection(event) {
    if (this.state.setClass != event.target.dataset.class) {
      this.setState({ setClass: event.target.dataset.class });
      this.setState({ setSelection: 0 });
      this.setState({ setRarity: 0 });
    } else {
      this.setState({ setClass: 0 });
    }
  }
  onRaritySelection(event) {
    if (this.state.setRarity != event.target.dataset.rarity) {
      this.setState({ setRarity: event.target.dataset.rarity });
      this.setState({ setSelection: 0 });
      this.setState({ setClass: 0 });
    } else {
      this.setState({ setRarity: 0 });
    }
  }

  handleInput(text) {}

  onInput(e) {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
    this.handleInput(e.target.value);
  }

  render() {
    return (
      <div>
        <div>{this.state.setSelection}</div>
        <div>{this.state.setClass}</div>
        <div>{this.state.setRarity}</div>
        <div>{this.state.searchTerm}</div>
        <div onClick={this.props.cardSetClick} className="Choices">
          Card Set
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="1"
          className={this.props.cardSet}
        >
          Naxx
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="2"
          className={this.props.cardSet}
        >
          GvG
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="3"
          className={this.props.cardSet}
        >
          BRM
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="4"
          className={this.props.cardSet}
        >
          TGT
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="5"
          className={this.props.cardSet}
        >
          LoE
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="6"
          className={this.props.cardSet}
        >
          WOG
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="7"
          className={this.props.cardSet}
        >
          Kara
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="8"
          className={this.props.cardSet}
        >
          MSG
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="9"
          className={this.props.cardSet}
        >
          {"Un'goro"}
        </div>
        <div
          onClick={this.onSetSelection}
          data-set="10"
          className={this.props.cardSet}
        >
          KFT
        </div>
        <div onClick={this.props.cardClassClick} className="Choices">
          Class
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="1"
          className={this.props.cardClass}
        >
          Druid
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="2"
          className={this.props.cardClass}
        >
          Hunter
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="3"
          className={this.props.cardClass}
        >
          Mage
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="4"
          className={this.props.cardClass}
        >
          Paladin
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="5"
          className={this.props.cardClass}
        >
          Priest
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="6"
          className={this.props.cardClass}
        >
          Rogue
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="7"
          className={this.props.cardClass}
        >
          Shaman
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="8"
          className={this.props.cardClass}
        >
          Warlock
        </div>
        <div
          onClick={this.onClassSelection}
          data-class="9"
          className={this.props.cardClass}
        >
          Warrior
        </div>
        <div onClick={this.props.cardRarityClick} className="Choices">
          Card Rarity
        </div>
        <div
          onClick={this.onRaritySelection}
          data-rarity="1"
          className={this.props.cardRarity}
        >
          Basic
        </div>
        <div
          onClick={this.onRaritySelection}
          data-rarity="2"
          className={this.props.cardRarity}
        >
          Common
        </div>
        <div
          onClick={this.onRaritySelection}
          data-rarity="3"
          className={this.props.cardRarity}
        >
          Rare
        </div>
        <div
          onClick={this.onRaritySelection}
          data-rarity="4"
          className={this.props.cardRarity}
        >
          Epic
        </div>
        <div
          onClick={this.onRaritySelection}
          data-rarity="5"
          className={this.props.cardRarity}
        >
          Legendary
        </div>
        <CardSearch
          searchTerm={this.state.searchTerm}
          cardSet={this.state.setSelection}
          cardClass={this.state.setClass}
          cardRarity={this.state.setRarity}
        />
        <form className="reactForm" onChange={this.onInput}>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default CategorySelector;

/*

https://stackoverflow.com/questions/28511207/react-js-onclick-event-handler

Use method here to pass selection choice

Then add search option and you're basically done


*/
