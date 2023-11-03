import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      data: [
        {name: "John C.", salary: 800, increase: false, like: false, id:1},
        {name: "Alex M.", salary: 3000, increase: false, like: false, id:2},
        {name: "Carl W.", salary: 5000, increase: false, like: false, id:3}
      ],
      term: "",
      filter: "all"
    };
    this.maxId=4;
  }

  deleteItem=(id)=>{
    this.setState(({data})=>{
      // const index=data.findIndex(elem=>elem.id===id);
      // const before=data.slice(0,index);
      // const after=data.slice(index+1);
      // const newData=[...before,...after];

      const newData=data.filter(elem=>elem.id!==id);
      return {data:newData};
    });
  }

  addItem=(name,salary)=>{
    const newData={
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++
    }
    this.setState(({data})=>{
      const newStateData=[...data,newData];
      return {data:newStateData};
    });
  }

  onToggle=(id, value)=>{
    // this.setState(({data})=>{
    //   const index=data.findIndex(elem=>elem.id===id);
    //   const oldItem = data[index];
    //   const newItem={...oldItem, increase: !oldItem.increase};
    //   const newData=[...data.slice(0, index),newItem,...data.slice(index+1)];
    //   return {data:newData};
    // });
    this.setState(({data})=>({
      data: data.map(item=>{
        if (item.id===id) {
          return {...item, [value]: !item[value]};
        }
        return item;
      })
    }));
  }

  serachEmp=(items,term)=>{
    if (term.length===0){
      return items;
    }

    return items.filter(item=>{
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onUpdateFilter=(name)=>{
    this.setState({filter: name});
  }

  onFilter=(data, name)=>{
    if (name==="all"){
      return data;
    } else if (name==="up"){
      return data.filter(item=>item.like===true);
    }
    return data.filter(item=>item.salary>1000);
  }

  onChangeSalary=(id, salary)=>{
    if (salary>0){
      this.setState(({data})=>{
        const newData=data.map(item=>{
          if (item.id===id){
            item.salary=salary;
          }
          return item;
        });
        return {data: newData};
      })
    }
  }

  render(){

    const {data, term, filter}=this.state;
    const filterData=this.onFilter(data, filter);
    const visibleData=this.serachEmp(filterData,term);

    return (
      <div className="app">
        <AppInfo 
        countEmployees={data.length}
        countIncrease={data.reduce((value, item)=>item.increase?++value:value, 0)}/>

        <EmployeesAddForm onSubmitItem={this.addItem}/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter onUpdateFilter={this.onUpdateFilter}/>
        </div>
        
        <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggle={this.onToggle}
          onChangeSalary={this.onChangeSalary}/>
      </div>
    );
  }
}

export default App;