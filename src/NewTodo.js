import React, {Component} from 'react';
import logo from './logo.svg';
import './NewTodo.css';

class NewTodo extends Component {

addWithEnter = (e) => {
  e.preventDefault();
  console.log('yum');

  var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
var inputText = document.getElementById("newAdd").value;

  var postxhttp = new XMLHttpRequest();
  var fullDataToBePosted={
    text: inputText
  }
  postxhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      var todo = JSON.parse(this.responseText);
      console.log("POST response text:");
      console.log(todo);
      var id = todo.id;
      // makeClientPost(inputText,id);
      var ol = document.getElementById('todoList');
var lists = ol.getElementsByTagName('li');
var listLength = lists.length; // total items


  var newListItem = document.createElement("li");
  var newCheckbox = document.createElement("input");
  var newDelete = document.createElement("button");
  var addIndex = listLength+1;

  newListItem.innerHTML = inputText;
  newListItem.id= "todoListItem"+addIndex;

  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.id= "CheckboxItem"+addIndex;

  newDelete.innerHTML = "Remove ToDo";
  newDelete.id = "deleteItem" + addIndex;


  document.getElementById("todoList").append(newListItem);
  document.getElementById("todoListItem"+addIndex).append(newCheckbox);
  document.getElementById("todoListItem"+addIndex).append(newDelete);

  var styling = document.getElementById("todoListItem"+addIndex);
  styling.classList.add("textstyling");

  let p = addIndex;
  // document.getElementById("CheckboxItem"+addIndex).addEventListener("click", function(){ decideTF(p,id); });
  document.getElementById("CheckboxItem"+addIndex).addEventListener('click', function(event){
    var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
    var bool= event.target.checked;
    // var string = event.target.id;
    // var p = string.substring(string.length-1, string.length);

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
  // document.getElementById("deleteItem"+addIndex).addEventListener("click", function(){ deletePost(p,id); });
  document.getElementById("deleteItem"+addIndex).addEventListener('click', function(event){
    var delid = id;
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

    var itemId = "todoListItem" + addIndex;
    var itemToRemove = document.getElementById(itemId);
    itemToRemove.parentNode.removeChild(itemToRemove);




  });
  document.getElementById("newAdd").value="";


    }
    else if (this.readyState == 4) {
      console.log(this.responseText);
    }
  }
  postxhttp.open("POST", "https://cse204.work/todos", true);
  postxhttp.setRequestHeader("Content-type", "application/json");
  postxhttp.setRequestHeader("x-api-key", APIKey);
  postxhttp.send(JSON.stringify(fullDataToBePosted));
}

componentDidMount() {
  document.getElementById("myBtn").addEventListener('click',function(){
      var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
    var inputText = document.getElementById("newAdd").value;

      var postxhttp = new XMLHttpRequest();
      var fullDataToBePosted={
        text: inputText
      }
      postxhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
          var todo = JSON.parse(this.responseText);
          console.log("POST response text:");
          console.log(todo);
          var id = todo.id;
          // makeClientPost(inputText,id);
          var ol = document.getElementById('todoList');
    var lists = ol.getElementsByTagName('li');
    var listLength = lists.length; // total items


      var newListItem = document.createElement("li");
      var newCheckbox = document.createElement("input");
      var newDelete = document.createElement("button");
      var addIndex = listLength+1;

      newListItem.innerHTML = inputText;
      newListItem.id= "todoListItem"+addIndex;

      newCheckbox.setAttribute("type", "checkbox");
      newCheckbox.id= "CheckboxItem"+addIndex;

      newDelete.innerHTML = "Remove ToDo";
      newDelete.id = "deleteItem" + addIndex;


      document.getElementById("todoList").append(newListItem);
      document.getElementById("todoListItem"+addIndex).append(newCheckbox);
      document.getElementById("todoListItem"+addIndex).append(newDelete);

      var styling = document.getElementById("todoListItem"+addIndex);
      styling.classList.add("textstyling");

      let p = addIndex;
      // document.getElementById("CheckboxItem"+addIndex).addEventListener("click", function(){ decideTF(p,id); });
      document.getElementById("CheckboxItem"+addIndex).addEventListener('click', function(event){
        var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
        var bool= event.target.checked;
        // var string = event.target.id;
        // var p = string.substring(string.length-1, string.length);

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
      // document.getElementById("deleteItem"+addIndex).addEventListener("click", function(){ deletePost(p,id); });
      document.getElementById("deleteItem"+addIndex).addEventListener('click', function(event){
        var delid = id;
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

        var itemId = "todoListItem" + addIndex;
        var itemToRemove = document.getElementById(itemId);
        itemToRemove.parentNode.removeChild(itemToRemove);




      });
      document.getElementById("newAdd").value="";


        }
        else if (this.readyState == 4) {
          console.log(this.responseText);
        }
      }
      postxhttp.open("POST", "https://cse204.work/todos", true);
      postxhttp.setRequestHeader("Content-type", "application/json");
      postxhttp.setRequestHeader("x-api-key", APIKey);
      postxhttp.send(JSON.stringify(fullDataToBePosted));
  });

  }

render(){
  return (
    
        <div className="row">
        <div className="col-sm-4" id="empty">
        </div>
        <div className="col-sm-4" id="notempty">
          <form onSubmit = {this.addWithEnter}>
          <input type="text" id="newAdd"/>
          <button type="button" id= "myBtn">Add ToDo</button>
          </form>
        </div>
      </div>


  );
}
}

export default NewTodo;
