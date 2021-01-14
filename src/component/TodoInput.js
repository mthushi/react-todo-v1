import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit,editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"/>
                        </div>
                    </div>
                    <input type="text" 
                    className="form-control text-capitalize" 
                    placeholder="enter todo item here"
                    value={item || ''}
                    onChange={handleChange}/>
                </div>
                <button type="submit" 
                    disabled = {item?false:true}
                    className={editItem ? "btn btn-success mt-3 btn-block text-white text-uppercase":"btn btn-primary mt-3 btn-block text-white text-uppercase"}>
                    {editItem ? "Edit item" : "Add item"}
                </button>
                </form>
            </div>
        )
    }
}

export default TodoInput;
