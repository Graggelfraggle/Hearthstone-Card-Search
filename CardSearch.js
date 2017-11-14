import React, { Component } from "react";
import axios from "axios";

class CardSearch extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchTerm: "argent"
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" +
          this.props.searchTerm +
          "?callback=&collectible=&locale=",
        {
          headers: {
            "X-Mashape-Key":
              "zRiX3SbUS7mshgH8qDcn38YscFQPp11Mh2cjsnEVcKla76V7OL"
          }
        }
      )
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
        console.log(res.data);
      });
  }

  ComponentWillReceiveProps(nextProps) {
    axios
      .get(
        "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" +
          nextProps.searchTerm +
          "?callback=&collectible=&locale=",
        {
          headers: {
            "X-Mashape-Key":
              "zRiX3SbUS7mshgH8qDcn38YscFQPp11Mh2cjsnEVcKla76V7OL"
          }
        }
      )
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
        console.log(res.data);
      });
  }

  render() {
    var set = [
      0,
      "Naxxramas",
      "Goblins vs Gnomes",
      "Blackrock Mountain",
      "The Grand Tournament",
      "The League of Explorers",
      "Whispers of the Old Gods",
      "One Night in Karazhan",
      "Mean Streets of Gadgetzan",
      "Journey to Un'Goro",
      "Knights of the frozen Throne"
    ];
    var cards = this.state.cards;
    var list = [];
    var number = Object.keys(cards).length;
    var cardClass = [
      0,
      "Druid",
      "Hunter",
      "Mage",
      "Paladin",
      "Priest",
      "Rogue",
      "Shaman",
      "Warlock",
      "Warrior"
    ];
    var rarity = [0, "Basic", "Common", "Rare", "Epic", "Legendary"];

    if (this.props.cardSet != 0) {
      for (var i = 0; i < number; i++) {
        if (this.state.cards[i].cardSet === set[this.props.cardSet]) {
          list.push(<div>{this.state.cards[i].name}</div>);
        }
      }
    } else if (this.props.cardClass != 0) {
      for (var i = 0; i < number; i++) {
        if (
          this.state.cards[i].playerClass === cardClass[this.props.cardClass]
        ) {
          list.push(<div key={i}>{this.state.cards[i].name}</div>);
        }
      }
    } else if (this.props.cardRarity != 0) {
      for (var i = 0; i < number; i++) {
        if (this.state.cards[i].rarity === rarity[this.props.cardRarity]) {
          list.push(<div key={i}>{this.state.cards[i].name}</div>);
        }
      }
    } else {
      for (var i = 0; i < number; i++) {
        list.push(<div key={i}>{this.state.cards[i].name}</div>);
      }
    }

    return (
      <div>
        {set[this.props.cardSet]}
        {cardClass[this.props.cardClass]}
        {rarity[this.props.cardRarity]}
        {list}
        {this.props.searchTerm}
      </div>
    );
  }
}

export default CardSearch;
