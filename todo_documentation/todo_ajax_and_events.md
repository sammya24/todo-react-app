# Steps to complete to turn ToDo app into React
After following the instructions [here](todo_getting_started.md), you should have the following:

- Working React app
- Ability to deploy React app to GitHub Pages
- `App` component that does initial setup and composes your other components
- `NewTodo` component containing the form for a new Todo
- `Todo` component containing HTML for a single Todo
- CSS files for each component

The next steps are:
1. Make sure you rename any `class` attributes to `className`: ([docs](https://react.dev/learn/writing-markup-with-jsx#3-camelcase-salls-most-of-the-things))
2. Add a trailing "/" to any self-closing tags
3. Add props to your `Todo` component ([docs](https://react.dev/learn/passing-props-to-a-component))
    - Will probably need the `id` and `text` at a minimum.
    - Render those props instead of having them hardcoded (to test, pass them when you create the component, i.e. `<Todo id="123" text="test" />`
    - Display the props inside the component, in `Todo.jsx`, i.e. `<p>{text}</p>`
4. Add your AJAX GET call
    - Add a `useState()` hook to your `App` component and initialize it with an empty `todos` array `const [todos, setTodos] = useState([])`. ([docs](https://react.dev/learn/state-a-components-memory))
    - Use a `useEffect()` hook in your `App` component and put your AJAX javascript there. ([docs](https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le))
    - After the AJAX call is complete and successful, update `todos` using `setTodos()` with your new Todo items.
5. Render `Todo` component for each Todo item.
    - Use `.map` to loop through your todos and render a new `<Todo>` for each of them. ([docs](https://react.dev/learn/rendering-lists))
    - Make sure to give a `key` attribute
6. Add event methods for completing and deleting a Todo
    - Read about [Responding to Events](https://react.dev/learn/responding-to-events)
    - Read about [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
    - Create event methods, and add your AJAX for completing and deleting inside the methods
    - Update the state, but never change an array. You must create new arrays every time you want to update them. ([docs](https://react.dev/learn/updating-arrays-in-state))
    - Send these new event methods as props to your Todo
    - Attach event methods to the buttons using `onChange` and `onClick` props.
7. Do the same thing for the New Todo component
    - Don't forget `event.preventDefault()`
