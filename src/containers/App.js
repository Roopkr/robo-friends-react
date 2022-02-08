import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Spinner from "../components/Spinner";
import Scroller from "../components/Scroller";
import ErrorBoundary from "../components/ErrorBoundary";
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
    return  (
      <div className="app">
        <div className="header">
          <h1 className="heading">ROBO FRIENDS</h1>
          <SearchBox searchResult={this.searchResult} />
        </div>
        {!this.state.robotsList.length?( <div className="spinner">
          <Spinner />
        </div>):
        resultRobotList.length ? (
          <Scroller>
              <ErrorBoundary>
            <CardList robotList={resultRobotList} />
              </ErrorBoundary>
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
