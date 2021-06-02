
import React from 'react'

// TAKES TODO DATA AND RENDERS TO PAGE

class Todo extends React.Component {

    constructor(props){
        super();

    }

    render() {
        return (
            // DIV NEEDS ONCLICK WILL TOGGLE STATE ID TASK COMPLETED
            // WHEN ITEM.COMPLETED = TRUE CHANGE CSS
            <div onClick={() => this.props.completedToggle(this.props.id)} >
                <p>{this.props.item.task}</p>
            </div>
        )
    }

}

export default Todo;