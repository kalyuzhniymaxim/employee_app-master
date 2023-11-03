import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {

    constructor(props){
        super(props);
        this.state = {
            filter: "all"
        }
        this.btns=[
            {name:"all", label: "Все сотрудники"},
            {name:"up", label: "На повышение"},
            {name:"more", label: "З/П больше 1000$"}
        ]
    }

    onCheckBtnClass=(name)=>{
        if (this.state.filter===name){
            return "btn btn-light";
        }
        return "btn btn-outline-light";
    }

    render(){

        const buttons=this.btns.map(({name, label})=>{
            const btnClass=this.onCheckBtnClass(name);
            return (
                <button 
                className={btnClass}
                type="button"
                name={name}
                key={name}
                onClick={(e)=>{
                    this.props.onUpdateFilter(e.target.name)
                    this.setState({filter: e.target.name})}}>
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );   
    }
};

export default AppFilter;