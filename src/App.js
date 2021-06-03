
import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './cssReset.css';

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
      todo: defaultTodo,
      text: ''
    }

  }


  PageContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    margin: 0% auto;
  `

  // CLICK HANDLER FOR TODO WILL TOGGLE COMPLETED GIVEN TODO ID
  completedToggle = id => {
    const changedTask = this.state.todo.map(task => {
      if (task.id === id) return {...task, completed: !task.completed}
      return task
    })
    this.setState({...this.state, todo: changedTask})
  }

  clearCompleted = e => {
    e.preventDefault();
    const clearedArray = this.state.todo.filter(task => !task.completed)
    this.setState({...this.state, todo: clearedArray});
  }

  inputOnChange = e => {
    this.setState({...this.state.text, text: e.target.value})
  }

  taskCreator = someText => {
    return {
      task: someText,
      id: Date.now() + Math.random(),
      completed: false
    }
  }

  formSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') return
    this.setState({...this.state, todo:
      [
      ...this.state.todo, this.taskCreator(this.state.text)
      ]
    })
    this.setState({text: ''})
  }

  // CLEARCOMPLETED ON CLICK BUTTON HANDLER

  render() {
    return (
      <this.PageContainer>
        <TodoForm textValue={this.state.text} change={this.inputOnChange} submit={this.formSubmit} clear={this.clearCompleted} />
        <TodoList todoArray={this.state.todo} completedToggle={this.completedToggle} />
      </this.PageContainer>
    );
  }
}

export default App;
