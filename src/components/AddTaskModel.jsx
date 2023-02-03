import React from "react";

const AddTaskModel = ({ todos, setTodos, isEdit, setIsEdit }) => {
	function addTask(e) {
		e.preventDefault();
		const task = document.getElementById("task-input").value;
		const tag = document.getElementById("tag-input").value;
		const status = document.querySelector('input[name="status"]:checked').value;
		const taskObj = {
			task,
			tag,
			status,
		};
		if (isEdit === null) {
			if (status === "todo") {
				let todoArray = [...todos.todo, taskObj];
				setTodos({ ...todos, todo: todoArray });
			}
			if (status === "in-progress") {
				let progressArray = [...todos.inprogress, taskObj];
				setTodos({ ...todos, inprogress: progressArray });
			}
			if (status === "done") {
				let doneArray = [...todos.done, taskObj];
				setTodos({ ...todos, done: doneArray });
			}
		} else {
			if (status === "todo" && isEdit.status === "todo") {
				let todoArray = [...todos.todo];
				todoArray[isEdit.index] = taskObj;
				setTodos({ ...todos, todo: todoArray });
			} else if (status === "in-progress" && isEdit.status === "in-progress") {
				let progressArray = [...todos.inprogress];
				progressArray[isEdit.index] = taskObj;
				setTodos({ ...todos, inprogress: progressArray });
			} else if (status === "done" && isEdit.status === "done") {
				let doneArray = [...todos.done];
				doneArray[isEdit.index] = taskObj;
				setTodos({ ...todos, done: doneArray });
			} else {
				var todoArray = [...todos.todo];
				var progressArray = [...todos.inprogress];
				var doneArray = [...todos.done];

				if (isEdit.status === "todo") {
					todoArray.splice(isEdit.index, 1);
				} else if (isEdit.status === "in-progress") {
					progressArray.splice(isEdit.index, 1);
				} else if (isEdit.status === "done") {
					doneArray.splice(isEdit.index, 1);
				}
				if (status === "todo") todoArray.push(taskObj);
				else if (status === "in-progress") progressArray.push(taskObj);
				else if (status === "done") doneArray.push(taskObj);

				setTodos({
					...todos,
					todo: todoArray,
					inprogress: progressArray,
					done: doneArray,
				});
			}

			setIsEdit(null);
		}
		hideAddTaskModel();
	}

	function hideAddTaskModel() {
		document.getElementById("task-input").value = "";
		document.getElementById("tag-input").value = "";
		document.getElementById("todo-radio").checked = true;
		document.getElementById("add-task-model").style.top = "-200%";
	}
	return (
		<section
			id="add-task-model"
			className="absolute top-[-200%] left-[0px] w-[100vw] h-[100vh] flex justify-center items-center bg-black/40 backdrop-blur-sm z-50 transition-all"
		>
			<form className="relative p-[3rem] bg-bg dark:bg-dark-bg-2 w-max h-max flex flex-col gap-[2rem] px-[5rem]">
				<h1 className="font-[500] text-[2rem] text-text-1 dark:text-dark-text-1 pb-[1rem]">
					Add Task
				</h1>
				<input
					data-testid="task-input"
					className="border-b-2 bg-bg dark:bg-dark-bg-2 border-[#000] dark:border-white/30 p-[0.5rem] focus:outline-none text-text-1 dark:text-dark-text-1"
					type="text"
					name="task"
					id="task-input"
					placeholder="Task"
				/>
				<input
					data-testid="tag-input"
					className="border-b-2 bg-bg dark:bg-dark-bg-2 border-[#000] dark:border-white/30 p-[0.5rem] focus:outline-none text-text-1 dark:text-dark-text-1"
					type="text"
					name="tag"
					id="tag-input"
					placeholder="Tag"
				/>
				<div className="flex flex-col gap-[1rem] text-text-1 dark:text-dark-text-1">
					<label htmlFor="status">Status</label>
					<span className="flex gap-[0.5rem]">
						<input
							data-testid="status-todo-radio"
							type="radio"
							id="todo-radio"
							name="status"
							value="todo"
							defaultChecked
						/>
						<label htmlFor="todo-radio">Todo</label>
					</span>
					<span className="flex gap-[0.5rem]">
						<input
							data-testid="status-in-progress-radio"
							type="radio"
							id="in-progress-radio"
							name="status"
							value="in-progress"
						/>
						<label htmlFor="in-progress-radio">In Progress</label>
					</span>
					<span className="flex gap-[0.5rem]">
						<input
							data-testid="status-done-radio"
							type="radio"
							id="done-radio"
							name="status"
							value="done"
						/>
						<label htmlFor="done-radio">Done</label>
					</span>
				</div>

				<button
					data-testid="submit-button"
					onClick={(e) => {
						addTask(e);
					}}
					className="w-full bg-amber-400 py-[1rem] cursor-pointer border-2 border-amber-400 hover:border-amber-600"
				>
					Add
				</button>
				<svg
					onClick={hideAddTaskModel}
					className="absolute top-[10px] right-[10px] rotate-45 w-[25px] h-auto stroke-icons-color-2 dark:stroke-dark-icon-color-1 hover:stroke-rose-600 cursor-pointer"
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
					<path d="M12 5v14m-7-7h14" />
				</svg>
			</form>
		</section>
	);
};

export default AddTaskModel;
