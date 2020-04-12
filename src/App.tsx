import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    robots: [],
    searchField: ""
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
      </div>
    );
  }
}

export default App;
