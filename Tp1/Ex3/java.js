document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todoForm"),
        nameInput = document.getElementById("nameInput"),
        taskInput = document.getElementById("todoInput"),
        list = document.getElementById("todoList");

  const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify([...list.children].map(li => ({
      name: li.querySelector("strong").textContent,
      content: li.childNodes[1].textContent.trim()
    }))));
  };

  const createTodo = (name, content) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `<strong>${name} </strong> ${content}`;

    let del = document.createElement("button");
    del.className = "btn btn-danger btn-sm";
    del.innerHTML = "&times;";
    del.onclick = () => (li.remove(), saveTodos());
    
    li.appendChild(del);
    list.appendChild(li);
  };

  getTodos().forEach(({ name, content }) => createTodo(name, content));

  form.onsubmit = e => {
    e.preventDefault();
    if (nameInput.value && taskInput.value) {
      createTodo(nameInput.value, taskInput.value);
      saveTodos();
      [nameInput.value, taskInput.value] = ["", ""];
    }
  };
});
