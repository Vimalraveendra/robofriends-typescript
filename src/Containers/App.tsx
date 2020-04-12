import React from "react";
import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import CardList from "../Components/CardList/CardList";

class App extends React.Component {
  state = {
    robots: [],
    searchField: ""
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends Typescript</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
