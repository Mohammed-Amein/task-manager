import { StyleSheet } from "react-native";

const TaskDisplayStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    width: 380,
    height: 570,
    paddingHorizontal: 12,
    paddingVertical: 36,
    elevation: 2,
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#007bff',
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },

  selectedButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },

  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007bff',
  },

  selectedText: {
    color: '#fff',
  },
});


export { TaskDisplayStyle };
