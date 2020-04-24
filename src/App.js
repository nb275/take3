import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {


render() {
  return (
    <div className = "body">

    <div className="text-center">
    <h1>
      Nick's Todo List
    </h1>
    </div>

    <div id = "listContainer">
    <div className="row">


    <div className="col-sm-4" id="empty">
    </div>



    <div className="col-sm-4" id="full">

    <section id="todos">
       <Todo />
    </section>

    </div>
    </div>



    <div className="row">
    <div className="col-sm-4" id="empty">
    </div>

    <div className="col-sm-4" id="notempty">
    <NewTodo />
    </div>

    </div>
    </div>
    </div>

  );
}
}

export default App;
