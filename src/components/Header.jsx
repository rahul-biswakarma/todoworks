import React from "react";

const Header = ({ theme, setTheme }) => {
	function showResetModel() {
		document.getElementById("reset-model").style.top = "0px";
	}

	function showAddTaskModel() {
		document.getElementById("add-task-model").style.top = "0px";
	}

	function setThemeFunc() {
		if (theme === "light") {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
		}
		localStorage.theme = theme === "light" ? "dark" : "light";
	}
	return (
		<header className="sticky h-max w-full top-[0px] left-[0px] flex max-[450px]:flex-col  flex-row justify-between min-[450px]:items-center gap-[1.5rem] text-text-1 pad-d-pad z-[50] bg-bg dark:bg-dark-bg-1 border-b-2 border-border-color dark:border-dark-border-color p-d-pad">
			<div className="flex gap-[0.5rem] max-[450px]:justify-center justify-start">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 266 266"
					className="w-[20px] sm:w-[30px] h-auto"
				>
					<g clipPath="url(#a)">
						<ellipse
							cx="185.5"
							cy="186"
							fill="#FB7185"
							rx="62.5"
							ry="63"
						/>
						<path
							fill="#FBBF24"
							d="M0-2v268l132-134L266-2H0Z"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path
								fill="#fff"
								d="M0 0h266v266H0z"
							/>
						</clipPath>
					</defs>
				</svg>
				<h1 className="font-[500] text-[1.4rem] sm:text-[2rem] text-text-1 dark:text-dark-text-1">
					ToDoWorks
				</h1>
			</div>
			<div className="flex gap-[1rem] sm:gap-[3rem] max-[450px]:border-t-2 border-border-color dark:border-dark-border-color max-[450px]:pt-d-pad max-[450px]:justify-center justify-end pt-[0px]">
				{theme === "light" ? (
					<svg
						onClick={setThemeFunc}
						className="w-[25px] h-auto stroke-icons-color-1 dark:stroke-dark-icon-color-1 hover:stroke-amber-500  dark:hover:stroke-amber-400 cursor-pointer"
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
						<path d="M12 3h.4a7.5 7.5 0 0 0 8 12.4A9 9 0 1 1 12 3z" />
					</svg>
				) : (
					<svg
						onClick={setThemeFunc}
						className="w-[25px] h-auto stroke-icons-color-1 dark:stroke-dark-icon-color-1 hover:stroke-amber-500 dark:hover:stroke-amber-400 cursor-pointer"
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
						<circle
							cx="12"
							cy="12"
							r="3"
						/>
						<path d="M6 6h3.5L12 3.5 14.5 6H18v3.5l2.5 2.5-2.5 2.5V18h-3.5L12 20.5 9.5 18H6v-3.5L3.5 12 6 9.5z" />
					</svg>
				)}
				<svg
					onClick={showResetModel}
					className="w-[25px] h-auto stroke-icons-color-1 dark:stroke-dark-icon-color-1 hover:stroke-rose-700 dark:hover:stroke-rose-400 cursor-pointer"
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
				<button
					data-testid="add-task-button"
					onClick={showAddTaskModel}
					className="flex gap-[10px] items-center rounded-md border-2 border-[#cb70ea] px-[0.8rem] sm:px-[1.5rem] py-[0.5rem] bg-[#ecd7f3] dark:bg-transparent dark:border-purple-400 text-[#b64ed8] dark:text-purple-400 stroke-[#b64ed8] dark:stroke-purple-400 hover:bg-[#cb70ea] dark:hover:bg-purple-400 hover:text-white dark:hover:text-white hover:stroke-white dark:hover:stroke-white transition-all duration-100 ease-in-out"
				>
					<svg
						className="w-[20px] h-auto  flex items-center"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M0 0h24v24H0z"
						/>
						<path d="M12 5v14m-7-7h14" />
					</svg>
					<span className=" mb-[-5px]">Add Task</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
