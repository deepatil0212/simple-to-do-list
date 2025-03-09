function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim(); // Get input value

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = function () {
        li.remove(); // Remove the task when button is clicked
    };

    // Append button to list item & list item to task list
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    taskInput.value = "";
}
