import { View, Text, TextInput } from 'react-native';
import InputAreaStyle from 'style/InputAreaStyle';

const styles = InputAreaStyle;

const ModalInputArea = ({ taskName, setTaskName, taskDescription, setTaskDescription }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter task name"
        onChangeText={text => setTaskName(text)}
        value={taskName}
      />
      <Text style={styles.label}>Task Description</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter task description"
        onChangeText={text => setTaskDescription(text)}
        value={taskDescription}
      />
    </View>
  );
};

export default ModalInputArea;