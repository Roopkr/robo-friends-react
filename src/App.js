import React, { Component } from "react";
import CardList from "./CardList";
import "./App.css";
import SearchBox from "./SearchBox";
import Spinner from "./Spinner";
import Scroller from "./Scroller";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robotsList: [],
      searchField: "",
    };
  }
  searchResult = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ robotsList: users }));
  }
  render() {
    const resultRobotList = this.state.robotsList.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return !this.state.robotsList.length ? (
      <div className="app">
        <div className="header">
          <h1 className="heading">ROBO FRIENDS</h1>
          <SearchBox searchResult={this.searchResult} />
        </div>
        <div className="spinner">
          <Spinner />
        </div>
        <div className="footer">
          <h4>Simple React App</h4>
        </div>
      </div>
    ) : (
      <div className="app">
        <div className="header">
          <h1 className="heading">ROBO FRIENDS</h1>
          <SearchBox searchResult={this.searchResult} />
        </div>
        {resultRobotList.length ? (
          <Scroller>
            <CardList robotList={resultRobotList} />
          </Scroller>
        ) : (
          <div className="no-result"><h1>No Results Found</h1></div>
        )}
        <div className="footer">
          <h4>Simple React App</h4>
        </div>
      </div>
    );
  }
}

export default App;
