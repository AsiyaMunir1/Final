// Get elements
const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const taskList = document.getElementById('task-list');

// Add event listeners
addBtn.addEventListener('click', addTask);
deleteAllBtn.addEventListener('click', deleteAllTasks);

// Function to add task
function addTask() {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));  
    
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Function to delete all tasks
function deleteAllTasks() {
  taskList.innerHTML = '';
}
