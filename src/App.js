import React,{Component} from "react";
import CardList from "./CardList";
import "./App.css"
import SearchBox from "./SearchBox";
import { robots } from "./robots";
class App extends Component{
    constructor(){
        super();
        this.state = {
        robotsList : robots,
        searchField : ""
        }
    }
    searchResult = (event)=> {
        this.setState({searchField:event.target.value});
    }
    render(){
        const resultRobotList = this.state.robotsList.filter(robot=>{
            return (
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            )
        })
        return(
            <div className="app">
                <div className="header">
                <h1 className="heading">ROBO FRIENDS</h1>
                <SearchBox searchResult={this.searchResult}/>
                </div>
                <CardList robotList={resultRobotList}/>
            </div>
        );
    }
}

export default App;