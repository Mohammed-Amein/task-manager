import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useContext } from 'react';
import { TaskContext } from 'Context/TaskContext';
import AddTaskStyle from 'style/AddTaskStyle';

const styles = AddTaskStyle;

function AddModal() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useContext(TaskContext);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddTask = () => {
    addTask(taskName, taskDescription);
    toggleModal();
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.fab} onPress={toggleModal}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
        
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modal} avoidKeyboard={true}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.modalContent}>
                    <View style={styles.inputArea}>
                        <Text style={styles.label}> Task Name</Text>
                        <TextInput placeholder="Enter task name" style={styles.textInput} onChangeText={text => setTaskName(text)} value={taskName} />
                        <Text style={styles.label}> Task Description</Text>
                        <TextInput placeholder="Enter task description" style={styles.textInput} onChangeText={text => setTaskDescription(text)} value={taskDescription} />
                    </View>
                    <View style={styles.cancelButton}>
                        <TouchableOpacity onPress={toggleModal} style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.addButton}>
                        <TouchableOpacity onPress={handleAddTask} style={styles.buttonStyle} disabled={taskName === ''}>
                            <Text style={[styles.buttonText, taskName === '' && styles.disabledText]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    </View>
  );
  ;
}



export default AddModal;
