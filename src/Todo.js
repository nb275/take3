import React, {Component} from 'react';
import logo from './logo.svg';
import './Todo.css';

class Todo extends Component {
render(){
  return (
    <li id="todoListItem1" class="struckthrough textstyling">
     Write Server Side Code

     <input type="checkbox" id="CheckboxItem1"/>

     <button id="deleteItem1">Remove ToDo</button>
     </li>
  );
}
}

export default Todo;
