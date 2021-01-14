import React,{Component} from 'react';
import {v4 as uuid} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

class App extends Component{
  
  state = {
    items : [],
    id : uuid(),
    item: '',
    editItem: false
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(items=>items.id!==id);
    const selectedItems = this.state.items.find(items=>items.id===id);
    this.setState({
      items:filteredItems,
      item:selectedItems.title,
      id:selectedItems.id,
      editItem:true
    })
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(items=>items.id!==id);
    this.setState({
      items:filteredItems
    })
  };

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItem = [...this.state.items,newItem];

    this.setState({
      items:updatedItem,
      id:uuid(),
      item:'',
      editItem:false
    },()=>console.log(this.state.items));
  };

  clearList = () => {
    this.setState({
      items:[]
    })
  };

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-input">
            todo input
          </h3>
          <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItem={this.state.editItem} 
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    </div>
  );
  }

}

export default App;
