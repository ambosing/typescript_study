interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems:Todo[];

// api
function fetchTodoItems():Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos():Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo:Todo) {
  todoItems.push(todo);
}

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index:number, todo:Todo):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo():Todo {
  return todoItems[0];
}

function showCompleted():Todo[] {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems():void {
  addTodo(    { id: 4, title: '타입', done: false })
  addTodo(    { id: 5, title: '스크립트', done: false })
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
