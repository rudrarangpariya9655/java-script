function intputErase() {
    const input = document.querySelector(".taskInput");
    const addedTask = document.querySelector(".addedTask");

    if (input.value.trim() === "") return;

    const taskItem = document.createElement("div");
    const newTask = document.createElement("p");
    const del = document.createElement("button");

    newTask.textContent = input.value;
    del.textContent = "-";

    del.addEventListener("click", function () {
        taskItem.remove();
    });

    taskItem.appendChild(newTask);
    taskItem.appendChild(del);
    addedTask.appendChild(taskItem);

    input.value = "";
}

button.addEventListener("click", inputErase);