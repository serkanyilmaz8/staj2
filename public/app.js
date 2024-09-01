document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');

    // GET todos
    function fetchTodos() {
        fetch('/todos')
            .then(response => response.json())
            .then(data => {
                todoList.innerHTML = '';
                data.forEach(todo => {
                    const li = document.createElement('li');
                    li.textContent = `${todo.id}: ${todo.title} - ${todo.completed ? 'Completed' : 'Not Completed'}`;
                    todoList.appendChild(li);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    fetchTodos();

    // POST todo
    document.getElementById('add-todo').addEventListener('click', function() {
        const id = document.getElementById('new-todo-id').value;
        const title = document.getElementById('new-todo-title').value;

        fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: parseInt(id), title: title, completed: false }),
        })
        .then(() => {
            fetchTodos();  // Todo listesini hemen güncelle
            document.getElementById('new-todo-id').value = '';
            document.getElementById('new-todo-title').value = '';
        })
        .catch(error => console.error('Error:', error));
    });

    // PUT todo
    document.getElementById('update-todo').addEventListener('click', function() {
        const id = document.getElementById('update-todo-id').value;
        const title = document.getElementById('update-todo-title').value;
        const completed = document.getElementById('update-todo-completed').checked;

        fetch(`/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: parseInt(id), title: title, completed: completed }),
        })
        .then(() => {
            fetchTodos();  // Todo listesini hemen güncelle
            document.getElementById('update-todo-id').value = '';
            document.getElementById('update-todo-title').value = '';
            document.getElementById('update-todo-completed').checked = false;
        })
        .catch(error => console.error('Error:', error));
    });

    // DELETE todo
    document.getElementById('delete-todo').addEventListener('click', function() {
        const id = document.getElementById('delete-todo-id').value;

        fetch(`/todos/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            fetchTodos();  // Todo listesini hemen güncelle
            document.getElementById('delete-todo-id').value = '';
        })
        .catch(error => console.error('Error:', error));
    });
});