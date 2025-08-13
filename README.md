# My Expo App

This project is a React Native application built with Expo. It includes features for managing tasks, such as adding, editing, and displaying tasks. The app uses a context-based state management approach and leverages several components for modularity and reusability.

## Project Structure

The project has the following structure:

```
my-expo-app/
├── app-env.d.ts
├── app.json
├── App.tsx
├── babel.config.js
├── cesconfig.jsonc
├── eslint.config.js
├── global.css
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── prettier.config.js
├── tailwind.config.js
├── tsconfig.json
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── splash.png
├── components/        <----    all the components are here
│   ├── AddModal.jsx
│   ├── EditModal.jsx
│   ├── EditTaskButton.jsx
│   ├── ModalButton.jsx
│   ├── ModalInputArea.jsx
│   ├── Task.jsx
│   ├── TaskDisplayer.jsx
├── Context/           <----    the context to share the state between components 
│   ├── TaskContext.jsx
├── style/             <----    all the styling is made here
│   ├── AddTaskStyle.jsx
│   ├── EditButtonStyle.jsx
│   ├── InputAreaStyle.jsx
│   ├── ModalStyles.jsx
│   ├── TaskCardStyle.jsx
│   ├── TaskDisplayStyle.jsx
```

## Key Features

- **Task Management**: Add, edit, and display tasks.
- **Reusable Components**: Modular components like `AddModal`, `EditModal`, and `TaskDisplayer`.
- **Context API**: Centralized state management using React's Context API.
- **Styling**: Custom styles for components located in the `style/` directory.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd my-expo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the development server:
   ```bash
   npx expo start 
   ```
2. Follow the instructions in the terminal to run the app on an emulator or a physical device.

## Components Overview

- **AddModal**: Modal for adding new tasks.
- **EditModal**: Modal for editing existing tasks.
- **TaskDisplayer**: Component for displaying a list of tasks.
- **TaskContext**: Context for managing task-related state.

## Styling

Custom styles are defined in the `style/` directory. Each component has its corresponding style file for better maintainability.





