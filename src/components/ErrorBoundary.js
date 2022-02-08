import {Component} from "react";
import "./ErrorBoundary.css";

class ErrorBonudary extends Component{
    constructor(props){
        super(props);
        this.state ={
            hasError :false
        };
    }

    componentDidCatch(){
        this.setState({hasError:true});
    }
    render()
    {
        return this.state.hasError?(<div className="error-msg"><h4>Something went wrong!</h4></div>) : (this.props.children);
    }
}

export default ErrorBonudary;