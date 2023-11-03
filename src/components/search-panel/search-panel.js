import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
    }

    onSearch = (e) => {
        this.setState({term: e.target.value});
        this.props.onUpdateSearch(e.target.value);
    }

    render(){
        const term=this.state.term;

        return (
            <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Найти сотрудника"
            value={term}
            onChange={(e)=>{this.onSearch(e)}}/>
        );
    }
};

export default SearchPanel;