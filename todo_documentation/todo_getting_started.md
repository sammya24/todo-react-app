# ToDo React

# Setup
- Make sure you've followed the instructions [here](todo_setup_instructions.md) and have a working React app that is published to GitHub Pages.
- If you're using Bootstrap or another framework that you're loading via a CDN, copy your `<link>` or `<script>` tags that load the frameworks into `index.html`.
  - Bootstrap or Tailwind CSS you will want to load above the existing title line.
  - Note: you DO NOT need to load any of your custom CSS files here, React will do that for us. Only add frameworks or tools that you're loading via CDN, like Bootstrap or Tailwind.
- Copy all of your custom ToDo CSS into `src/App.css`.

# ToDo Component
- Create two new files in the `src` directory - `Todo.jsx` and `Todo.css`.
- Copy the existing `App.jsx` file into `Todo.jsx` and change the following:
  - `import './App.css';` **->** `import './Todo.css';`
  - `function App() {` **->** `function Todo() {`
  - `export default App` **->** `export default Todo;`
- Copy your HTML for one ToDo into the `return()` section, replacing the HTML that is currently there.
  - Since you probably generated this dynamically, you can open in your page in a browser, inpect a ToDo item, and copy the "Outer HTML".
  - Rename any "class" attributes to "className"
  - Add a trailing "/" to any self-closing tags
  - Example (this will be unique for you, use the HTML you already wrote in the previous assignment):
  ```html
  return (
    <div id="396472d0-f2bc-11ee-89b4-a77e829bf3d4" className=“todo”>
      <input type="checkbox" />
      <p>Run a mile</p>
      <button>Delete</button>
    </div>
  );
  ```
- Move any CSS related to each ToDo from `src/App.css` into `src/Todo.css`
- In your `App.jsx` file, after the existing `import` statements add the line `import Todo from './Todo';`
- In your `App.jsx` file, modify the HTML to match the HTML structure for your ToDo app, minus the HTML for each ToDo, and the HTML for your new ToDo form.
  - Note, you need one container element
  - Example (this will be unique for you, use the HTML you already wrote in the previous assignment):
  ```html
  return (
    <section id="todos">
    </section>
  );
  ```
- Next, add your ToDo component inside your container element.
  - Example:
  ```html
  return (
    <section id="todos">
      <Todo />
    </section>
  );
  ```
- Make sure you have your app running by running `npm run dev` in your terminal, and go to the page at [`http://localhost:5173`](http://localhost:5173).

# Form Component
- Next, add a `NewTodo.jsx` and `NewTodo.css` file in your `src` directory.
- Move any CSS related to your new Todo form from `src/App.css` to `src/NewTodo.css`
- Copy the contents of `src/Todo.jsx` into `src/NewTodo.jsx` and change the following lines:
  - `import './Todo.css'` **->** `import './NewTodo.css';`
  - `function Todo() {` **->** `function NewTodo() {`
  - `export default Todo;` **->** `export default NewTodo;`
- Add the HTML related to your new Todo form inside the `return (` function, replacing the existing HTML that should be related to each ToDo with your form HTML.
  - Example (this will be unique for you, use the HTML you already wrote in the previous assignment):
  ```html
  return (
    <section id="new-todo">
      <form id="new-todo-form">
        <input id="new-todo-text" type="text" placeholder="What needs to be done?" autofocus />
        <button id="new-todo-submit" type="submit">Add ToDo</button>
      </form>
    </section>
  );
  ```
- Add the following line to your `src/App.jsx`, right below the existing `import` statements:
  - `import NewTodo from './NewTodo';`
- Add your new `NewTodo` component the same way you added the `ToDo` component, right above the `<Todo />` line.
  - Example:
  ```html
  return (
    <section id="todos">
      <NewTodo />
      <Todo />
    </section>
  );
  ```
- Refresh your page and you should now see your new Todo form and one example Todo.
