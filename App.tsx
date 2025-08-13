import { Text, View, StyleSheet } from 'react-native';
import TaskDisplayer from 'components/TaskDisplayer';
import { TaskProvider } from 'Context/TaskContext';
import AddModal from 'components/AddModal';
// we have 2 components here, one for displaying tasks and another for adding tasks
// <TaskDisplayer> is used to display the tasks and AddModal is used to add new tasks
// <AddModal> this is the add button on the bottom right corner of the screen
// TaskProvider is used to provide the task context to the whole app so that we can access the task state without prop drilling




export default function App() {
  return (
    <TaskProvider> {/*wrapping the whole app in the task context to share the state without prop drilling*/}
      <View style={styles.container}>
        <TaskDisplayer />
        
        <AddModal/>
      </View>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 3,
    
    borderRadius: 10,
  },
});
