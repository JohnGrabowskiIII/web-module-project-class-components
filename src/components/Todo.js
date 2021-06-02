
import React from 'react'

// TAKES TODO DATA AND RENDERS TO PAGE

class Todo extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.item.task}</p>
            </div>
        )
    }

}

export default Todo;