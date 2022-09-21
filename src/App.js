
import { Component } from 'react';
import './App.css';
import TodoCards from './TodoCards.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      random: []
    }
  }
  //Using an arrow function allows us to use the global "this" unlike regular functions
  addTodo = () => {
    /* 
      Rather than directly setting this.state.todoList, the setState() function
      is used to update any state variables you want. That means you'd have to 
      make a new variable, change that, and then assign it to the state variable 
      that you want to change in setState
    */
    const todo = {
      name: "New Todo",
      priority: "Low"
    };

    let newTodoList = this.state.todoList;
    newTodoList.push(todo);

    this.setState({
      todoList: newTodoList,
    });
  }

  deleteTodo = (index) => {
    let newTodoList = this.state.todoList;
    newTodoList.splice(index, 1)

    this.setState({
      todoList: newTodoList,
    });
  }

  editTodo = (todo, index) => {
    let newTodoList = this.state.todoList;
    newTodoList[index] = todo;

    this.setState({
      todoList: newTodoList,
    });
  }

  //In class-based components, functions must be declared using "this."
  //This allows React to know that these functions are coming from this class.
  render() {
    return (
      <div className='app'>
        <h1> Todo Tracker </h1>

        <button onClick={() => this.addTodo()}> 
          Add Todo 
        </button>
        
        {/* 

        Here, we're adding a new child component called TodoCards to handle 
        displaying each todo. In line 78, we're passing a state variable to TodoCards.
        React will re-render all the child components whenever the state is changed.

        Props are read-only, which means that we also need callback functions that 
        allow the parent component to change the props (lines 80-81).
        
        When TodoCards calls these callbacks, App.js will call the functions assigned to the callbacks 
        below. Since these functions change the state and the todo list is in the state,
        TodoCards will then be re-rendered with the new todoList. 

        */}
        <TodoCards 
        todoList={this.state.todoList} 
        deleteCallback={this.deleteTodo}
        editCallback={this.editTodo}
        />
      </div>
    );
  }
}

export default App;
