
import React from 'react'

// INPUT
// ENTER WHILE IN INPUT SHOULD SUBMIT ALSO
// ADD TODO BUTTON
// CLEAR COMPLETED BUTTON
class TodoForm extends React.Component {

    constructor(props) {
        super(props)


    }

    render() {

        return (
            <form>
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
                <button onClick={this.props.submit} >Add Todo</button>
                {/* ADD ONCLICK HERE TO CLEAR COMPLETED TASKS */}
                <button onClick={this.props.clear} >Clear Completed</button>
            </form>
        )
    }

}

export default TodoForm;