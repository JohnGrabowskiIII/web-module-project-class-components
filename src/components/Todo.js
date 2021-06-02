
import React from 'react'

// TAKES TODO DATA AND RENDERS TO PAGE

class Todo extends React.Component {

    render() {
        return (
            // DIV NEEDS ONCLICK WILL TOGGLE STATE ID TASK COMPLETED
            // WHEN ITEM.COMPLETED = TRUE CHANGE CSS
            <div>
                <p>{this.props.item.task}</p>
            </div>
        )
    }

}

export default Todo;