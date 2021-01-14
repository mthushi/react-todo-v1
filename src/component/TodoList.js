import React, { Component } from 'react';
import Item from './TodoItem';

class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props;
        return (
            <ul className="List-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {return(
                    <Item key={item.id} title={item.title} 
                    handleDelete={()=>handleDelete(item.id)} 
                    handleEdit={()=>handleEdit(item.id)}>
                    </Item>
                )}
                )}
                <button type="button" className="btn btn-block btn-danger text-uppercase-mt-5" onClick={clearList}>
                    clear list
                </button>
            </ul>
        )
    }
}

export default TodoList;
