import React from "react";
import "./App.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import CardList from "../Components/CardList/CardList";
import Scroll from "../Components/Scroll/Scroll";

export interface IRobots {
  name: string;
  email: string;
  id: number;
}

interface IAppProps {}

interface IAppState {
  robots: Array<IRobots>;
  searchField: string;
}

class App extends React.Component<IAppProps, IAppState> {
  state = {
    robots: [],
    searchField: ""
  };

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    this.setState({ searchField: newValue });
  };

  filteredArray = () => {
    const { robots, searchField } = this.state;
    return robots.filter((robot: IRobots) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render(): JSX.Element {
    return !this.state.robots.length ? (
      <h1>Loading Robots...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={this.filteredArray()} />
        </Scroll>
      </div>
    );
  }
}

export default App;
