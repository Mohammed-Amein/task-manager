import { useState } from 'react';
import { View } from 'react-native';
import { ModalStyles } from '../style/ModalStyles';
import EditModal from './EditModal';
import ModalButton from './ModalButton';

const styles = ModalStyles;

function EditTaskButton({ id,name, description }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <ModalButton icon="pencil" onPress={toggleModal} />
      <EditModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        id={id} // id is now correctly passed
        name={name} // Assuming id has a name property
        description={description} // Assuming id has a description property
      />
    </View>
  );
}

export default EditTaskButton;
