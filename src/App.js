import React, { useState, useEffect } from "react";

import { useIsMount } from "./components/useIsMount";

import Main from "./components/Main";
import Header from "./components/Header";
import ResetModel from "./components/ResetModel";
import AddTaskModel from "./components/AddTaskModel";

const App = () => {
	const isMount = useIsMount();

	const [theme, setTheme] = useState("light");
	const [isEdit, setIsEdit] = useState(null);
	const [todos, setTodos] = useState({ todo: [], done: [], inprogress: [] });

	useEffect(() => {
		if (localStorage.getItem("todo") !== null)
			setTodos(JSON.parse(localStorage.getItem("todo")));
		if (localStorage.theme === "dark" || !("theme" in localStorage)) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
		}
	}, []);

	useEffect(() => {
		if (!isMount) {
			localStorage.setItem("todo", JSON.stringify(todos));
		}
	}, [todos, isMount]);

	return (
		<div
			data-testid="app-component"
			className="relative w-full h-[100vh] bg-bg dark:bg-dark-bg-1 overflow-x-hidden"
		>
			<Header
				theme={theme}
				setTheme={setTheme}
			/>
			<div className="w-full max-w-[100vw] h-[100vh] fixed top-[0px] left-[0px] z-[2] bg-ballon dark:bg-dark-ballon bg-no-repeat bg-[top_8rem_left] overflow-hidden">
				<div className="w-full max-w-[100vw] h-[100vh] fixed top-[0px] left-[0px] z-[2] bg-cactus-pattern dark:bg-dark-cactus-pattern bg-repeat-x bg-bottom"></div>
			</div>
			<section className="relative z-[10]">
				{todos.todo.length > 0 ||
				todos.done.length > 0 ||
				todos.inprogress.length > 0 ? (
					<Main
						todos={todos}
						setTodos={setTodos}
						setIsEdit={setIsEdit}
					/>
				) : (
					<div className="flex justify-center p-[5rem_0] text-text-2 ">
						<div className="border-2 border-dashed border-text-2 p-[3rem]">
							Would you add some task please 😕
						</div>
					</div>
				)}
			</section>
			<AddTaskModel
				todos={todos}
				setTodos={setTodos}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
			/>
			<ResetModel />
		</div>
	);
};

export default App;
