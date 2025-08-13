import { Text, View, StyleSheet } from 'react-native';
import TaskDisplayer from 'components/TaskDisplayer';
import { TaskProvider } from 'Context/TaskContext';
import AddModal from 'components/AddModal';


export default function App() {
  return (
    <TaskProvider>
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
