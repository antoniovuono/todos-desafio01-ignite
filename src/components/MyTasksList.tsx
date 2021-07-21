import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';


interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
            onPress={() => onPress(item.id) }
            onLongPress={() => onLongPress(item.id)}
            
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text 
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
    
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15
   
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 10
  },
  taskText: {
    color: '#666666',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 10
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through'
  }
})