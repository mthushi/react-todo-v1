import React, { Component } from 'react';
import Item from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>Hello from todolist..</h1>
                <Item></Item>
            </div>
        )
    }
}

export default TodoList;
