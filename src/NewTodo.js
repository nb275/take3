import React, {Component} from 'react';
import logo from './logo.svg';
import './NewTodo.css';

class NewTodo extends Component {
render(){
  return (
    <div class="row">
        <div class="col-sm-4" id="empty">
        </div>
        <div class="col-sm-4" id="notempty">
          <form onsubmit="makeServerPost();return false">
          <input type="text" id="newAdd"/>
          <button type="button" id= "myBtn">Add ToDo</button>
          </form>
        </div>
      </div>
  );
}
}

export default NewTodo;
