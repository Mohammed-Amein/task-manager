//Task.jsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { TaskContext } from 'Context/TaskContext';
import { Feather } from '@expo/vector-icons';
import EditTaskButton from './EditTaskButton';
import { TaskCardStyle } from 'style/TaskCardStyle';

const styles = TaskCardStyle

const Task = ({ task }) => {
  const { deleteTask, toggleDone } = useContext(TaskContext);
  const [isDone, setIsDone] = useState(task.done);

  const onToggle = () => {
    toggleDone(task.id);
    setIsDone(!isDone);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={styles.circle}>
        {isDone && <View style={styles.checkedCircle} />}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{task.name}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <Text style={[styles.status, { color: task.done ? 'green' : 'red' }]}>
          {task.done ? 'Done' : 'Not Done'}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => deleteTask(task.id)}
        style={styles.deleteButton}
        activeOpacity={0.7}
      >
        <Feather name="trash-2" size={24} color="#ff4444" />
      </TouchableOpacity>
      <View style={styles.editButton}>
      <EditTaskButton  id={task.id} name={task.name} description={task.description} />
      </View>
      
    </View>
  );
};







export default Task;
