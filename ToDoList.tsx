import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Study for test</Text>
        </View>
      </Pressable>
      
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Buy groceries</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Clean room</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#dfe6e9',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
