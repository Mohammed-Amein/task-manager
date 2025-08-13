import { StyleSheet } from "react-native";

const ModalStyles = StyleSheet.create({
  modalCard: {
    width: 300,
    height: 400,
    left: 25,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#28a745',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 120,
    height: 40,
    backgroundColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  actionButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 120,
    height: 40,
  },
});

const inputArea = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 12,
    fontSize: 14,
    color: '#000',
  },
});

export { ModalStyles, inputArea };