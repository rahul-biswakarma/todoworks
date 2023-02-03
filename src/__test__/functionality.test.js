import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";

// Components
import App from "../App";

afterEach(cleanup);

describe("Functionality Checks", () => {
	it("renders the component", () => {
		const { getByTestId } = render(<App />);
		const app = getByTestId("app-component");
		expect(app).toBeInTheDocument();
	});

	it("displays a message to add tasks when there are no todos", () => {
		const { getByText } = render(<App />);
		const message = getByText("Would you add some task please 😕");
		expect(message).toBeInTheDocument();
	});

	it("can add a todo", () => {
		const { getByText, getByTestId } = render(<App />);
		const message = getByText("Would you add some task please 😕");
		expect(message).toBeInTheDocument();

		// Add a todo
		fireEvent.click(getByTestId("add-task-button"));
		fireEvent.change(getByTestId("task-input"), {
			target: { value: "Test Todo" },
		});
		fireEvent.click(getByTestId("submit-button"));

		// Check if the message is not displayed
		expect(message).not.toBeInTheDocument();

		// Check if the todo is added
		const todo = getByText("Test Todo");
		expect(todo).toBeInTheDocument();
	});

	it("inputs cleared after adding todo", () => {
		const { getByTestId } = render(<App />);

		const taskInput = getByTestId("task-input");
		expect(taskInput).toHaveValue("");
	});

	it("can delete a todo", () => {
		const { getByText, getByTestId } = render(<App />);

		// Delete todo
		fireEvent.click(getByTestId("delete-todo-button-0"));

		const message = getByText("Would you add some task please 😕");
		expect(message).toBeInTheDocument();
	});

	it("edit button updates the input field values", () => {
		const { getByTestId } = render(<App />);

		// Add a todo
		fireEvent.click(getByTestId("add-task-button"));
		fireEvent.change(getByTestId("task-input"), {
			target: { value: "Edit Todo Test" },
		});
		fireEvent.click(getByTestId("submit-button"));

		// Click edit button
		fireEvent.click(getByTestId("edit-todo-button-0"));

		// Check input tag has the updated value
		const taskInput = getByTestId("task-input");
		expect(taskInput).toHaveValue("Edit Todo Test");
	});

	it("can edit a todo", () => {
		const { getByTestId } = render(<App />);

		// Click edit button
		fireEvent.click(getByTestId("edit-todo-button-0"));

		// Check input tag has the updated value
		const taskInput = getByTestId("task-input");
		fireEvent.change(getByTestId("task-input"), {
			target: { value: "Edit Todo Test 1" },
		});

		// Click submit button
		fireEvent.click(getByTestId("submit-button"));

		expect(getByTestId("todo-title-0").textContent).toBe("Edit Todo Test 1");
	});

	it("can change todo status", () => {
		const { getByText, getByTestId } = render(<App />);

		// Click edit button
		fireEvent.click(getByTestId("edit-todo-button-0"));
		fireEvent.click(getByTestId("status-done-radio"));

		// Click submit button
		fireEvent.click(getByTestId("submit-button"));

		expect(getByTestId("todo-status-0").textContent).toBe("done");
	});

	it("can add tags in todo", () => {
		const { getByText, getByTestId } = render(<App />);

		// Click edit button
		fireEvent.click(getByTestId("edit-todo-button-0"));
		fireEvent.change(getByTestId("tag-input"), { target: { value: "tag1" } });

		// Click submit button
		fireEvent.click(getByTestId("submit-button"));

		expect(getByTestId("todo-tag-0").textContent).toBe("tag1");
	});
});
