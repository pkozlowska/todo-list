function addTask(event, id) {
  const taskList = document.querySelector(".task-list");
  const newTaskInput = document.getElementById("newTaskInput");
  const taskHTML = `<div id="task-container-${id}" class="d-flex flex-row justify-content-between py-4 border-bottom">
                <input class="ms-4" type="checkbox">
                <p class="task-description ms-4 me-auto mb-0 w-full">${newTaskInput.value}</p>
                <button class="delete-btn me-4 bg-transparent border-0" onclick="deleteTask('${id}')">
                <i class="bi bi-x"></i>
                </button>
            </div>`;
  if (event.key === "Enter") {
    taskList.insertAdjacentHTML("afterbegin", taskHTML);
    newTaskInput.value = "";
  }
}

function deleteTask(id) {
  const taskToDelete = document.getElementById(`task-container-${id}`);
  taskToDelete.remove();
}
