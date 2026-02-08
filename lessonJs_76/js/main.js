"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};


// При помощи метода querySelector получаем элементы .form, .input и .todos
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosContainer = document.querySelector('.todos');

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки

const createTodoElement = function (todo) {       
  const li = document.createElement('li');      
  li.className = 'todo';                        
  li.dataset.id = todo[todoKeys.id];            

  if (todo[todoKeys.is_completed]) {            
    li.classList.add('completed');              
  }

  li.innerHTML = `
  <div class="todo-text">${todo[todoKeys.text]}</div>
  <div class="todo-actions">
  <button class="button-complete button">&#10004;</button>
  <button class="button-delete button">&#10006;</button>
  </div>
  `;
  
  return li;
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const handleCreateTodo = function (text) {
  if (!text.trim()) return; 

  const newTodo = createTodo(todos, text);
  const todoElement = createTodoElement(newTodo);
  todosContainer.appendChild(todoElement);
  input.value = ''; 
  input.focus(); 
};

// ниже полностью ИИ 


// Обработчик отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();
  handleCreateTodo(input.value);
});

// Обработчик кликов на кнопки внутри списка задач
todosContainer.addEventListener('click', (event) => {
  const todoElement = event.target.closest('.todo');
  if (!todoElement) return;

  const todoId = parseInt(todoElement.dataset.id);

  // Обработка кнопки завершения задачи
  if (event.target.classList.contains('button-complete')) {
    completeTodoById(todos, todoId);
    todoElement.classList.toggle('completed');
  }

  // Обработка кнопки удаления задачи
  if (event.target.classList.contains('button-delete')) {
    deleteTodoById(todos, todoId);
    todoElement.remove();
  }
});

// Что-то сам написал, что-то выгуглил, что-то ИИ (хотелось посмотреть, как выглядит полностью рабочее приложение):(
//  С нетирпением жду пропуска дальше, чтобы посмотреть как сделал преподователь 


