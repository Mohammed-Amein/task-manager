import Task from './Task';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useContext, useState, useRef, useEffect } from 'react';
import { TaskContext } from 'Context/TaskContext';
import { TaskDisplayStyle } from 'style/TaskDisplayStyle';

const styles = TaskDisplayStyle;

const TaskDisplayer = () => {
  const { Tasks } = useContext(TaskContext); // Accessing the tasks from the TaskContext

  const [filter, setFilter] = useState('all'); // 'all', 'done', 'undone'
  const scaleAnim = useRef(new Animated.Value(1)).current; // animation value

  // Animate button when filter changes
  useEffect(() => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.1, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true })
    ]).start();
  }, [filter]);
  // Function to filter tasks based on the selected filter
  // 'done' for completed tasks, 'undone' for pending tasks, 'all' for all tasks
  const getFilteredTasks = () => {
    if (filter === 'done') return Tasks.filter(task => task.done);
    if (filter === 'undone') return Tasks.filter(task => !task.done);
    return Tasks;
  };

  const filteredTasks = getFilteredTasks();

  const renderButton = (label, value) => (
    <Animated.View style={{ transform: [{ scale: filter === value ? scaleAnim : 1 }] }}>
      <TouchableOpacity
        onPress={() => setFilter(value)}
        style={[
          styles.filterButton,
          filter === value && styles.selectedButton // highlight when selected
        ]}
      >
        <Text style={[styles.filterText, filter === value && styles.selectedText]}>
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {renderButton('All', 'all')}
        {renderButton('Done', 'done')}
        {renderButton('Undone', 'undone')}
      </View>

      {/* Task List renders the tasks in the task state from the last to begin*/}
      {filteredTasks.length === 0 ? (
        <Text>No tasks yet!</Text>
      ) : (
        <FlatList
          data={[...filteredTasks].reverse()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Task task={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TaskDisplayer;
