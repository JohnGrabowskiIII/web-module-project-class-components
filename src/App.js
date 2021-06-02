
import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const defaultTodo = [
  {
    task: 'Finish web3.1 project 1',
    id: Date.now() + Math.random(),
    completed: false
  },
  {
    task: 'Submit web.31 project 1 and complete associated quizzes',
    id: Date.now() + Math.random(),
    completed: false
  },
  {
    task: 'Build program to set canvas pixels individually',
    id: Date.now() + Math.random(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todo: defaultTodo
    }

  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList todoArray={this.state.todo} />
      </div>
    );
  }
}

export default App;
