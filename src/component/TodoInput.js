import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text bg-primary text-white">
                            <i class="fas fa-book"/>
                        </div>
                    </div>
                    <input type="text" 
                    class="form-control text-capitalize" 
                    placeholder="enter todo item here"
                    value={item}
                    onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3 btn-block text-white text-uppercase">
                    Add item
                </button>
                </form>
            </div>
        )
    }
}

export default TodoInput;
