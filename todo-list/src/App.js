import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import TodoItem from './components/TodoItem';
import TodoItemF from './components/TodoItemF';
import Axios from "axios";
import axios from 'axios';

/* 
      Props
   - Data dari parent ke child
*/
        // Parent =app
class App extends React.Component {
  state = {
    todoList : [
      
    ],
    inputTodo: "",
  }

  fetchTodo = () => {
    axios.get("http://localhost:2000/todo") // start execute
    .then((response) => {
      // alert("HELLOO")
      console.log(response.data)
      this.setState({ todoList: response.data })
    });
    // alert("HAII")
  }

  deleteTodo = (id) => {
    this.setState(
      {
        todoList: this.state.todoList.filter((val) => {
          return val.id !== id
        })
      }
    )
  }


  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem deleteTodoHandler= {this.deleteTodo} todoData = {val} />
        )
    })
  }

  addTodo = () => {
    axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
    })
    .then(() => {
      alert("Berhasil menambahkan Todo!");
      this.fetchTodo()
    })
    // this.setState(
    //   {
    //     todoList: [
    //       ...this.state.todoList,
    //       {activity: this.state.inputTodo, id: this.state.todoList.length +1},

    //     ]
    //   }
    // )
  }

  inputHandler = (event) => {
    // event.target.value = menyimpan value dari input text saat ini
    this.setState({ inputTodo: event.target.value });
  }
  
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button className='btn btn-info' onClick={this.fetchTodo}>Get my Todo List</button>
        { this.renderTodoList() }
        <div>
          <input onChange={this.inputHandler} type= "text" className= "mx-3" />
          <button onClick={this.addTodo} className="btn btn-primary">Add Todo</button>
        </div>
      </div>

    );
  }
}

export default App;
