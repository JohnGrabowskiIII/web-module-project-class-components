// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo'

// RECIEVES ARRAY
// ITERATE OVER
// CALL TODO AT EACH ITERATION
class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }

    todoIterate = () => {
        return this.props.todoArray.map(item => {
            return <Todo id={item.id} item={item} key={item.id} completedToggle={this.props.completedToggle}/>
        })
    }

    render() {
        return(
            <>
                <h1>Todo List</h1>
                {this.todoIterate()}
            </>
        )
    }

}

export default TodoList;