import React from "react";

const Task = ({ todos, setTodos, todo, index, setIsEdit }) => {
	function editTask(todoObj) {
		document.getElementById("task-input").value = todoObj.task;
		document.getElementById("tag-input").value = todoObj.tag;
		document.getElementById(`${todoObj.status}-radio`).checked = true;

		setIsEdit({ status: todo.status, index: index });

		document.getElementById("add-task-model").style.top = "0%";
	}
	function deleteTask() {
		let todoArray = [...todos.todo];
		let progressArray = [...todos.inprogress];
		let doneArray = [...todos.done];

		if (todo.status === "todo") {
			todoArray.splice(index, 1);
		} else if (todo.status === "in-progress") {
			progressArray.splice(index, 1);
		} else if (todo.status === "done") {
			doneArray.splice(index, 1);
		}

		setTodos({
			...todos,
			todo: todoArray,
			inprogress: progressArray,
			done: doneArray,
		});
	}
	return (
		<li
			className={`list-item ${
				todo.status === "done" ? "checked-item" : ""
			} dark:bg-dark-card-bg dark:text-dark-text-1`}
		>
			<div
				data-testid={`todo-title-${index}`}
				className="min-w-[7vw]"
			>
				{todo.task}
			</div>
			<div className="tags-container">
				<div
					data-testid={`todo-status-${index}`}
					className={`${todo.status}-tag`}
				>
					{todo.status}
				</div>
				{todo.tag && (
					<div
						data-testid={`todo-tag-${index}`}
						className="task-tag"
					>
						{todo.tag}
					</div>
				)}
			</div>
			<div className="icons-container">
				<span
					data-testid={`delete-todo-button-${index}`}
					onClick={deleteTask}
				>
					<svg
						className="w-[25px] h-auto stroke-icons-color-1 dark:stroke-dark-icon-color-1 hover:stroke-rose-700 hover:dark:stroke-rose-400 cursor-pointer"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M0 0h24v24H0z"
						/>
						<path d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
					</svg>
				</span>
				<span
					data-testid={`edit-todo-button-${index}`}
					onClick={() => {
						editTask(todo);
					}}
				>
					<svg
						className="w-[25px] h-auto stroke-icons-color-1 dark:stroke-dark-icon-color-1 hover:stroke-yellow-500 hover:dark:stroke-yellow-500 cursor-pointer"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M0 0h24v24H0z"
						/>
						<path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4m9.5-13.5 4 4" />
					</svg>
				</span>
			</div>
		</li>
	);
};

export default Task;
