import React, {Component} from 'react';
import logo from './logo.svg';
import './Todo.css';

class Todo extends Component {
  constructor() {
  super()
  this.state = {
    todos: [],
    currentTodo: {
      text: '',
      key: ''
    },
  }

    this.getTodosAndDisplay = this.getTodosAndDisplay.bind(this);
}



componentDidMount() {
    window.addEventListener('load', this.getTodosAndDisplay);

  }





  getTodosAndDisplay = (e) => {
    var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200) {
        console.log("GET response text:")
        var todos = JSON.parse(this.responseText);
        console.log(todos);
        if (todos.length>0){
           for(var i =todos.length-1; i>-1; i--){


            var newListItem = document.createElement("li");
            var newCheckbox = document.createElement("input");
            var newDelete = document.createElement("button");
            var inverti = (i-todos.length)*(-1);

            var rawText=todos[i].text;

            newListItem.innerHTML = rawText;
            newListItem.id= "todoListItem"+inverti;

            newCheckbox.setAttribute("type", "checkbox");
            newCheckbox.id= "CheckboxItem"+inverti;

            newDelete.innerHTML = "Remove ToDo";
            newDelete.id = "deleteItem" + inverti;


            document.getElementById("todoList").append(newListItem);
            document.getElementById("todoListItem"+inverti).append(newCheckbox);
            document.getElementById("todoListItem"+inverti).append(newDelete);

            if((todos[i].completed)==true){
            newCheckbox.checked = true;
            var element = document.getElementById("todoListItem"+inverti);
            element.classList.add("struckthrough");

            }
            var styling = document.getElementById("todoListItem"+inverti);
            styling.classList.add("textstyling");

            let length = JSON.stringify(todos[i].id).length;
            let p= inverti;
            let currentId = JSON.stringify(todos[i].id).substring(1,length-1);
            let currentBoolean=(todos[i].completed);
            

            document.getElementById("CheckboxItem"+inverti).addEventListener('click', function(event){
              var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
              var bool= event.target.checked;
              // var string = event.target.id;
              // var p = string.substring(string.length-1, string.length);
               var id = currentId;
              // console.log(p);
              // console.log(id);

              let myList = document.querySelector('ol');

              if(bool==false){
                var data = {
                  completed: false
                }
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    var todo = JSON.parse(this.responseText);
                    console.log("PUT false response text:");
                    console.log(todo);
                    var element = document.getElementById("todoListItem"+p);
                    element.classList.remove("struckthrough");
                  }
                  else if (this.readyState == 4) {
                    console.log(this.responseText);
                  }
                };
                xhttp2.open("PUT", "https://cse204.work/todos/" + id, true);
                xhttp2.setRequestHeader("Content-type", "application/json");
                xhttp2.setRequestHeader("x-api-key", APIKey);
                xhttp2.send(JSON.stringify(data));
              }
              else{
                var data = {
                  completed: true
                }
                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    var todo = JSON.parse(this.responseText);
                    console.log("PUT true response text:");
                    console.log(todo);
                    var element = document.getElementById("todoListItem"+p);
                    element.classList.add("struckthrough");
                  }
                  else if (this.readyState == 4) {
                    console.log(this.responseText);
                  }
                };
                xhttp2.open("PUT", "https://cse204.work/todos/" + id, true);
                xhttp2.setRequestHeader("Content-type", "application/json");
                xhttp2.setRequestHeader("x-api-key", APIKey);
                xhttp2.send(JSON.stringify(data));
              }
            });

            document.getElementById("deleteItem"+inverti).addEventListener('click', function(event){
              var delid = currentId;
              var delxhttp = new XMLHttpRequest();
              delxhttp.onreadystatechange = function()
              {
                if (this.readyState == 4 && this.status == 200) {
                  console.log("DELETE response text:")
                  var todo = JSON.parse(this.responseText);

                  console.log(todo);
                }
                else if (this.readyState ==4){
                  console.log(this.responseText);
                }
              };
              delxhttp.open("DELETE", "https://cse204.work/todos/" + delid, true);
              delxhttp.setRequestHeader("x-api-key",APIKey);
              delxhttp.send();

              var itemId = "todoListItem" + p;
              var itemToRemove = document.getElementById(itemId);
              itemToRemove.parentNode.removeChild(itemToRemove);




            });




          }

        }
      }
      else if (this.readyState == 4){
        console.log(this.responseText);
      }


    };

    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key",APIKey);
    xhttp.send();
  }


render(){
  return (


    <ol id="todoList">

      </ol>

  );
}
}

export default Todo;


// <li id="todoListItem1" class="struckthrough textstyling">
//  Write Server Side Code
//
//  <input type="checkbox" id="CheckboxItem1"/>
//
//  <button id="deleteItem1">Remove ToDo</button>
//  </li>
