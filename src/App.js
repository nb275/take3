import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

function App() {
  return (
    <div class = "body">

    <div class="text-center">
    <h1>
    Nick's Todo List
    </h1>
    </div>

    <div id = "listContainer">
    <div class="row">


    <div class="col-sm-4" id="empty">
    </div>



    <div class="col-sm-4" id="full">

    <section id="todos">
       <Todo />
       <Todo />
       <Todo />

    </section>

    </div>
    </div>



    <div class="row">
    <div class="col-sm-4" id="empty">
    </div>

    <div class="col-sm-4" id="notempty">
    <NewTodo />
    </div>

    </div>
    </div>
    </div>

  );
}

export default App;
