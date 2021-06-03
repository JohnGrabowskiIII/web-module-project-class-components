
import React from 'react'
import styled from 'styled-components';

// INPUT
// ENTER WHILE IN INPUT SHOULD SUBMIT ALSO
// ADD TODO BUTTON
// CLEAR COMPLETED BUTTON
class TodoForm extends React.Component {

    constructor(props) {
        super(props)


    }

    StyledForm = styled.form`
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: salmon;

        > button {
            width: 82%;
            margin: 0 auto;
        }

        > * > input {
            width: 80%;
            background-color: FloralWhite;
        }
    `

    TodoButton = styled.button`
        background-color: pink;
        color: black;
    `

    ClearButton = styled.button`
        background-color: red;
        color: white;
    `

    render() {

        return (
            <this.StyledForm>
                <label>
                    Please input the details of your task
                    {/* STOP RESIZING IN CSS WITH resize: none; */}
                    {/* NEEDS EVENT LISTENER FOR ENTER KEY PRESS */}
                    {/* ENTER PRESS SUBMITS */}
                    <input type='text'
                    name='taskInput'
                    maxLength='100'
                    placeholder='Step 1: x, Step 2: y...'
                    value={this.props.textValue}
                    onChange={this.props.change}
                    onKeyDown={this.props.enter} />
                </label>
                <this.TodoButton onClick={this.props.submit} >Add Todo</this.TodoButton>
                {/* ADD ONCLICK HERE TO CLEAR COMPLETED TASKS */}
                <this.ClearButton onClick={this.props.clear} >Clear Completed</this.ClearButton>
            </this.StyledForm>
        )
    }

}

export default TodoForm;