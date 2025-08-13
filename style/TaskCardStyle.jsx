import { StyleSheet } from "react-native";

const TaskCardStyle = StyleSheet.create({
  card: {
    width: 350,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },

  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  checkedCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#007bff',
  },

  textContainer: {
    height: 80,
    width: 120,
    left: 40,
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 0,
    marginVertical: 0,
    
    borderRadius: 8,
    
   
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  description: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  status: {
    marginTop: 4,
    fontSize: 12,
    fontStyle: 'italic',
    color: '#888',
  },

  deleteButton: {
    left: 140,
    marginLeft: 12,
    padding: 4,
  },

  editButton: {
    top: 35,
    left: 90,
    
  }
});

export { TaskCardStyle };
