import { useState } from 'react';
import { View } from 'react-native';
import { ModalStyles } from '../style/ModalStyles';
import EditModal from './EditModal';
import ModalButton from './ModalButton';

// this component is responsible for rendering the edit button in the task card and the modal when clicked

const styles = ModalStyles;

function EditTaskButton({ id,name, description }) {
  // State to control the visibility of the modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <ModalButton icon="pencil" onPress={toggleModal} /> {/* Button to open the modal */}
      {/* the modal itself */}
      <EditModal  
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        id={id} 
        name={name} 
        description={description} 
      />
    </View>
  );
}

export default EditTaskButton;
