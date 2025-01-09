# DBhatia

- Create a Vite + React Application
    npm create vite@latest dbhatia-web -- --template react
- Remove unnecessary code and Create a Hello World app
- Install Tailwind:
    npm install -D tailwindcss postcss autoprefixer  
    npx tailwindcss init -p
- Configure Tailwind for js/jsx/ts/tsx file inside tailwind.config.js file
- Add Tailwind to Your CSS :
    include below tailwind directives inside main css file: (index.css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
- Install DaisyUI
    npm install daisyui@latest -D
- Configure daisyUI with tailwind
    inside tailwind.config.js, add 'require('daisyui')' into the plugin
- Configure daisyui theme into your app
- Add navbar component to App.jsx
- ROUTING: install react router:
    npm i react-router-dom
- Create BrowserRouter > Routes > Route=Body > RouteChildren
- Create an Outlet in Body component
- Install axios
    npm install axios

- Install react-redux PLUS reduxjs/toolkit: https://redux-toolkit.js.org/tutorials/quick-start
    npm install @reduxjs/toolkit react-redux
- ==> configureStore ==> Provider ==> createSlice ==> add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in store
- Navbar should update as soon as user logs in
- Refactor code to add constants file + create a component folder
