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
    console.log(`Handle edit ${id}`)
  };

  handleDelete = (id) => {
    console.log(`Handle delete ${id}`)
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
    console.log('Clear list')
  };

  render() {
    return (
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto col-md-8 mt-5">
          <h3 class="text-capitalize text-input">
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
