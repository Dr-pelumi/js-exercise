const todoList = [
	{
		name: "make dinner",
		dueDate: "2024-10-20",
	},
	{
		name: "wash dishes",
		dueDate: "2024-10-24",
	},
];

renderTodoList();

function renderTodoList() {
	//render means to display on the page

	let todoListHTML = "";

	todoList.forEach((todoObject, index) => {
		const { name, dueDate } = todoObject; // destructuring
		const html = `
   <div>${name}</div>
   <div>${dueDate}</div>  
   <button  class="delete-todo-button js-delete-todo-button">Delete</button>
   `;
		todoListHTML += html; // Generating an Html
	});

	document.querySelector(".js-todo-list").innerHTML = todoListHTML;

	document
		.querySelectorAll(".js-delete-todo-button")
		.forEach((deleteButton, index) => {
			deleteButton.addEventListener("click", () => {
				todoList.splice(index, 1);
				renderTodoList();
			});
		});
}

document.querySelector(".js-add-button").addEventListener("click", () => {
	addTodo();
});

function addTodo() {
	const inputElement = document.querySelector(".js-name-input");
	const name = inputElement.value;

	const dateInputElement = document.querySelector(".js-due-date-input");

	const dueDate = dateInputElement.value;

	todoList.push({
		name: name,
		dueDate: dueDate,
	});

	inputElement.value = "";

	renderTodoList();
}
