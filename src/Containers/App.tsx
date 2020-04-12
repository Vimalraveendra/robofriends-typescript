import React from "react";
import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import CardList from "../Components/CardList/CardList";
import Scroll from "../Components/Scroll/Scroll";

interface IRobots {
  name: string;
  email: string;
  id: number;
}

interface IAppProps {}

interface IAppStates {
  robots: Array<IRobots>;
  searchField: string;
}

class App extends React.Component<IAppProps, IAppStates> {
  state = {
    robots: [],
    searchField: ""
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  filteredArray = () => {
    const { robots, searchField } = this.state;
    robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
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
        <Scroll>
          <CardList robots={this.filteredArray()} />
        </Scroll>
      </div>
    );
  }
}

export default App;
