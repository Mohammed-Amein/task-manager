import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditButtonStyle from 'style/EditButtonStyle';

const styles = EditButtonStyle;

const ModalButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.editButton} onPress={onPress}>
      <Ionicons name={icon} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default ModalButton;
