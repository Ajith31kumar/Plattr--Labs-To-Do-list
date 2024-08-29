
# Todo List Application

## Description

This Todo List application allows users to manage their tasks efficiently. Users can add new tasks, mark them as completed, edit existing tasks, and delete individual or all tasks. The app provides a user-friendly interface with filtering options to view tasks based on their completion status.

## Features

1. **Add Tasks:** Quickly add new tasks to your list.
2. **Edit Tasks:** Update the content of existing tasks.
3. **Complete/Incomplete:** Mark tasks as completed or incomplete.
4. **Delete Tasks:** Remove individual tasks or clear all tasks at once.
5. **Filter Tasks:** View tasks based on their completion status (All, Completed, Incomplete).
6. **Persistent Storage:** Tasks are saved in local storage, so they persist between page reloads.

## Installation

To run this application locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ajith31kumar/Plattr--Labs-To-Do-list.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd Plattr--Labs-To-Do-list
   ```

3. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000` by default.

## Usage

1. **Adding a Task:**
   - Enter a task description in the input field and click the "Add Task" button.

2. **Editing a Task:**
   - Click the pencil icon next to a task to edit it.

3. **Marking a Task as Completed/Incomplete:**
   - Click the checkbox next to a task to toggle its completion status.

4. **Deleting a Task:**
   - Click the trash icon next to a task to delete it.

5. **Clearing All Tasks:**
   - Click the "Clear All" button to remove all tasks from the list.

6. **Filtering Tasks:**
   - Use the filter buttons to view tasks based on their completion status: All, Completed, or Incomplete.

## Components

- **`App.js`:** Main application component that manages state and handles task operations.
- **`AddTask.js`:** Component for adding new tasks.
- **`ShowTask.js`:** Component for displaying tasks with options to edit, delete, and toggle completion.
- **`FilterBar.js`:** Component for filtering tasks by completion status.
- **`Header.js`:** Component for displaying the application header.

## Styling

The application uses custom CSS styles along with Bootstrap for responsive design. Styles are located in `App.css`.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to make further adjustments based on any specific details or requirements you have for your project.
