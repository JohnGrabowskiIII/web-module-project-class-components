// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import styled from 'styled-components'

import Todo from './Todo'

// RECIEVES ARRAY
// ITERATE OVER
// CALL TODO AT EACH ITERATION
class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }

    AllTasksContainer = styled.div`
        width: 50%;
        background: black;
        color: white;
       

        > h1 {
            text-align: center;
            padding: 13px;
            font-size: 2rem;
        }
    `

    todoIterate = () => {
        return this.props.todoArray.map(item => {
            return <Todo id={item.id} item={item} key={item.id} completedToggle={this.props.completedToggle} />
        })
    }

    render() {
        return(
            <this.AllTasksContainer>
                <h1>Todo List</h1>
                {this.todoIterate()}
            </this.AllTasksContainer>
        )
    }

}

export default TodoList;