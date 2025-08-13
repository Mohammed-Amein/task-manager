import { StyleSheet } from "react-native";

const AddTaskStyle = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 50,
    left: 100,
    backgroundColor: '#28a745',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  fabText: {
    fontSize: 28,
    color: '#fff',
    lineHeight: 32,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    height: 400,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#28a745',
  },
  inputArea: {
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
  cancelButton: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    width: 100,
  },
});

export default AddTaskStyle;