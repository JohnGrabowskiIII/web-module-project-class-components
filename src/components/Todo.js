
import React from 'react'
import styled from 'styled-components';

// TAKES TODO DATA AND RENDERS TO PAGE



class Todo extends React.Component {

    constructor(props){
        super();

    }

    TaskPtag = styled.p`
    text-decoration: ${props => this.props.item.completed ? 'line-through' : 'none'}
    `

    render() {
        return (
            // DIV NEEDS ONCLICK WILL TOGGLE STATE ID TASK COMPLETED
            // WHEN ITEM.COMPLETED = TRUE CHANGE CSS
            <div onClick={() => this.props.completedToggle(this.props.id)} >
                <this.TaskPtag>{this.props.item.task}</this.TaskPtag>
            </div>
        )
    }

}

export default Todo;