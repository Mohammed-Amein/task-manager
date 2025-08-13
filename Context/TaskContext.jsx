//TaskContext.jsx
import { useContext, useState, createContext } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [Tasks, setTasks] = useState([
    { "id": 1, "name": "Buy milk", "description": "2 liters", "done": false },
    { "id": 2, "name": "Walk dog", "description": "Evening walk", "done": true },
  
]);

  // delete function
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // toggle function
  const toggleDone = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
  

  // add function
  const addTask = (name, description = " no description") => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1,
        name,
        description,
        done: false,
      },
    ]);
  };

  // edit function
  // edit function
  const editTask = (id, newName, newDescription) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id !== id) return task;
  
        return {
          ...task,
          name: newName.trim() !== '' ? newName : task.name,
          description: newDescription.trim() !== '' ? newDescription : task.description,
        };
      })
    );
  };
  

  
  

  return (
    <TaskContext.Provider value={{ Tasks, setTasks, deleteTask,toggleDone ,addTask,editTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };

