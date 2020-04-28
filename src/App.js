import React, { Component } from "react";
import CardList from "./components/card-list/cardList";
import { SearchBox } from "./components/search-box/searchBox";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ cards: users }));
  }

  handleChange = (e) => this.setState({ searchFiled: e.target.value });

  render() {
    const { searchFiled, cards } = this.state;

    const filteredCards = cards.filter((card) =>
      card.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Card test test </h1>
        <SearchBox
          placeholder="search cards"
          handleChange={this.handleChange}
        />
        <CardList cards={filteredCards} />
      </div>
    );
  }
}

export default App;
