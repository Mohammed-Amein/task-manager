this readme contains:

 1. project structure
 2. installation steps
 3. components over view
 4. styling
 5. context and state management 
 6. App functionalities
 7. detailed explanation for how each component work

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
   git clone https://github.com/Mohammed-Amein/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   npm i react-native-modal
   cd my-expo-app
   ```

make sure you use expo 
## Running the App

1. Start the development server:
   ```bash
   npx expo start --no-dev --minify 
   ```


## Components Overview
- **TaskDisplayer**: this components renders the task cards , rendered in `<App.jsx>`
- **Task**: the task card each task hold one task info and hold the logic for toggle and delete task. rendered in `<TaskDispalyer.jsx>` 
- **EditTaskButton**: this button displays the modal that edits the task, rendered in `<Task>`.
- **EditModal**: Modal for editing  tasks ,  rendered in `<EditTaskButton>`.
- **ModalInputArea**: hold the input fiedls needed to edit tasks rendered in `<EditModal>`.
- **AddModal**: Modal for adding new tasks , rendered in `<App.jsx>`.
- **TaskContext**: Context for managing task-related state , located in context folder.

## Styling

Custom styles are defined in the `style/` directory. Each component has its corresponding style file for better maintainability.


## state management

state management is done using the `useContext` hook to avoid prop drilling  
the implementation is done in the `TaskContext.jsx` in the context folder  
it contains:

1.  **task state** : a state to hold the data of each task, it stores `id`, `name`, `description`, and `done` status. used by `<TaskDisplayer>`
    
2.  **setTasks** : the function used to manipulate the **task state**.
    
3.  **delete function** : takes the task `id` as input and deletes the task using **setTasks**. used by `<Task>`
    
4.  **toggle function** : takes the task `id` as input and toggles the `done` status between `true` and `false`. used by `<Task>`
    
5.  **add function** : takes a `name` and optional `description` as input, generates a unique `id`, and adds a new task to the state with `done` set to `false` by default. used by `<Addmodal>`
    
6.  **edit function** : takes the task `id`, `newName`, and `newDescription` as input, and updates only the provided fields — if `newName` is empty it keeps the old name, and if `newDescription` is empty it keeps the old description. used by `<EditModal>`



## App functionalities

 1. **Add task :**
 - green circled button with + icon is in the bottom right of the screen
 - when clicked a modal appears sliding from down to app
 - it contains 2 input fields *task name* and *task description*
 - the modal have 2 buttons ***cancel*** and ***ADD***
 - **cancel** button cancels the operation and close the modal
 - **ADD** button performs the operation and add new task 
 - **ADD** button is disabled until the task name input field is filled
 - when ADD button is clicked it :
add new task
closes the modal
delete the text in input fields for the next time usage
- when input field is clicked to type in , the modal moves up to avoid the keyboard

2.  **mark done/undone:**
- on the task card there is a button on the left of the card to mark done/undone
- under the task description there is a text done / not done that changes based on the task condition

3. **filter tasks**
- there is 3 buttons on the top 
All : shows all the tasks
Done : show tasks marked as done
Undone : show tasks marked as undone

4. **edit tasks:**
- there is a black pencil icon in the task card
- clicking on it displays a modal same like add task modal
- the input fields hold the current name and description
- if both fields are empty the ok button will be disabled 


5. **delete tasks:**
- there is a red trash icon on the right of task card
- clicking on it delete the task 




## components 

 1. ** APP.jsx**
all the components are wrapped in the `<TaskProvider>` to share state with all the components wrapped within it

this component return `<TaskDisplayer/> ` and `<AddModal/>` 

2. **TaskDisplayer**

- it renders all the tasks in the `<Task>` using a `<FlatList>` starting from last
filters the 
- filters the tasks based on **done** **undone** or **ALL**

3. **Task**
-this card hold all the task data it receives  *name, description, done* as props `<TaskDisplayer>`

- uses `deleteTask`, `toggleDone` function from `TaskContext`
to perform delete and toggle functionalities

- render the edit button `<EditTaskButton>` to perform edit functionality but the logic is inside the `<EditTaskButton>`

4.  **EditTaskButton**

- hold `isModalVisible` state thats used when to open/close modal
- render the `<ModalButton>` and `<EditModal>` 
- `<ModalButton>` is just a button itself it it calls `toggleModal()` onPress to  open/close modal
- `<EditModal>`  is the modal itself where it hold the edit logic

5. **EditModal**

- hold the edit task logic by calling `editTask` from `TaskContext`
- renders the `<ModalInputArea>` and close/OK buttons
-  hold the `taskName` and `taskDescription` states and given an initial value of the current name and description (received as props)
- `<ModalInputArea>` renders the input field for name and description and holds the current values of task (because the state hold it)
- if the input fields is empty the OK button well be disabled 
- when OK button is clicked it 
use the `editTask` to edit the task
close the modal

- everything is wrapped up in `<KeyboardAvoidingView>` this help to avoid colliding with the keyboard

- the modal component is used from https://github.com/react-native-modal/react-native-modal


6. **Addmodal** 
work the same way as `<EditModal>` but uses `addTask`  from `TaskContext` to perform the add task functionality 

note : the `<Addmodal>` and `<EditModal>` is similar but i made `<Addmodal>` in one full component while i broke `<EditModal>` to smaller components 




[![Demo](video/preview.png)](https://github.com/Mohammed-Amein/task-manager/raw/main/video/demo.mp4)




