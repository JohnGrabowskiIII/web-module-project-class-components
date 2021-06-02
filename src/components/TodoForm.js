
import React from 'react'

// INPUT
// ENTER WHILE IN INPUT SHOULD SUBMIT ALSO
// ADD TODO BUTTON
// CLEAR COMPLETED BUTTON
class TodoForm extends React.Component {

    render() {

        return (
            <form>
                <label>
                    Please input the details of your task
                    {/* STOP RESIZING IN CSS WITH resize: none; */}
                    <textarea name='taskInput' maxLength='100' rows='8' cols='40' placeholder='Step 1: x, Step 2: y...' /> 
                </label>
            </form>
        )
    }

}

export default TodoForm;