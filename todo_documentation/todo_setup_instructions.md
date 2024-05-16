# Prerequisites
- Make sure you have a terminal application on your computer.
  - On Mac, the default "terminal" application will work.
  - On Windows, use Git Bash (installed with Git by default), the command prompt, or another terminal program.
  - VS Code has a terminal is built in, and on Windows can be set to use Git Bash or Windows Command Prompt or Powershell

- Try running `git --version` in your terminal. If you get an error, install Git from here: https://git-scm.com/ 
- Install Node.js which includes `npm`. To test if you have this installed, run `npm -v` and if it is installed, you should see a number output with the current version. Make sure it is greater than or equal to `10.5.0`.
- If `npm` is not installed, go here to install Node.js: https://nodejs.org/

# Setup
- In your terminal application, navigate to your repository folder.
  - Run `npm install` which will install the dependencies for the React application using npm. You will see a new "node_modules" folder in your project.

# Running Your App
- React must be compiled in order to load in the browser. The "todo-react" project was created using a tool called "vite" which includes a built-in tool that will compile after any chages and reload your page. You will use this while building your page.
  - In your terminal application, navigate to your repo folder.
  - Run `npm run dev`
  - The URL "http://localhost:5173" should automatically open in your browser. If not, open it. You should see a heading "ToDo App".
  - In your code editor, open your repository and find the `src/App.jsx` file. This contains the code for your React app. Add "YOURNAME - ToDo App" to a new "h2" tag below the existing "h1".
  - Save the file and switch back to your browser. The page should automatically reload and you should see your changes.
  - When done, you can stop the local server by opening your terminal and typing "ctrl-c"
  
# Deploying Your App
- When ready to deploy your app to GitHub Pages, run `npm run deploy` in your project directory.
  - This will run, automagically, 'npm run predeploy', which is set to call 'vite build', which will ultimately make a production build (compiled/minified version) of your project in a folder called 'dist'. You will see this new folder created. (on the very first run, this also does a little **extra** magic and runs a script to update the base directory so that GitHub pages will work correctly)
  - Once the predeploy/build process is complete, 'gh-pages -d dist' will be called, which is an external library that will create a new branch in your repo called `gh-pages` and deploy the 'build' folder tot that branch.
    - Note, please **do not modify** this branch directly. You shouldn't ever commit to it directly, let the `npm run deploy` command handle it for you.
  - If there are no errors, go to the Github Pages url and see your App running!
  - This would also be a great time to commit and push. You should see the change you made to `src/App.jsx`, a change to the predeploy line in `package.json`, and a brand new `package-lock.json` file.
  - If you see an error, make sure you have git installed from here: https://git-scm.com/.
  - If you have installed Git but are still seeing an error, and are on Windows, try using Git Bash.
  - Open your repo in GitHub and go to the "settings" tab and scroll down to the "GitHub Pages" section. Make sure the "gh-pages" branch is selected instead of the "main" branch, and change it if needed.
