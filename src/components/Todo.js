
import React from 'react'
import styled from 'styled-components';

// TAKES TODO DATA AND RENDERS TO PAGE



class Todo extends React.Component {

    constructor(props){
        super();

    }

    TaskContainer = styled.div`
        background-color: ${props => this.props.item.completed ? 'red' : 'pink'};
        padding: ${props => this.props.item.completed ? '5px 5px' : '15px 5px'};

        > p {
            font-size: 1rem;
            color: ${props => this.props.item.completed ? 'white' : 'black'};
            text-decoration: ${props => this.props.item.completed ? 'line-through' : 'none'};
        }
    `

    render() {
        return (
            <this.TaskContainer onClick={() => this.props.completedToggle(this.props.id)} >
                <p>{this.props.item.task}</p>
            </this.TaskContainer>
        )
    }

}

export default Todo;