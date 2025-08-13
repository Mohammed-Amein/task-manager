// ModalComponent.jsx
import { View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { useState, useContext } from 'react';
import { TaskContext } from 'Context/TaskContext';
import Modal from 'react-native-modal'; 
import { ModalStyles } from 'style/ModalStyles';
import ModalInputArea from './ModalInputArea';

const styles = ModalStyles;

const EditModal = ({ isModalVisible, toggleModal, id, name, description }) => {
  const { editTask } = useContext(TaskContext);

  const [taskName, setTaskName] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);

  const handleEditTask = () => {
    editTask(id, taskName, taskDescription);
    toggleModal();
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
      <KeyboardAvoidingView>
        <View style={styles.modalCard}>
          <ModalInputArea taskName={taskName} setTaskName={setTaskName} taskDescription={taskDescription} setTaskDescription={setTaskDescription} />
          {/* Cancel button */}
          <TouchableOpacity onPress={toggleModal} style={[styles.closeButton, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ color: 'white', fontSize: 16 }}>Cancel</Text>
          </TouchableOpacity>
          {/* Add button */}
          <View style={styles.actionButton}>
            <TouchableOpacity onPress={handleEditTask} style={[styles.actionButton, { backgroundColor: '#28a745', justifyContent: 'center', alignItems: 'center' }]} disabled={taskName === '' && taskDescription === ''}>
              <Text style={{ color: 'white', fontSize: 16 }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditModal;
