import React, { useState } from 'react';
import { Alert, StyleSheet, View } from "react-native";

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {

    const taskAlreadyExists = tasks.find(task => task.title === newTaskTitle);

      if (taskAlreadyExists) {
        Alert.alert(
          'Tarefa já cadastrada', 
          'Você não pode cadastrar uma task com o mesmo nome'
        );
        return
      }

      if(newTaskTitle !== "") {
        const data = {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false
        };

        setTasks(oldState => [...oldState, data]);
      } else {
        Alert.alert(
          'Não foi possível adicionar sua tarefa',
          'Não é possível adicionar uma tarefa sem um título'
          );
      }

    

  }
  function handleMarkTaskAsDone(id: number) {
     const updatedTasks = tasks.map(
       task => task.id === id
       ? { ...task, done: !task.done }
       : task
     );
     setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
   
    Alert.alert(
      'Remover item',
      'Você tem certeza que deseja remover esse item?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () =>  setTasks(oldState => oldState.filter(task => task.id !==id)),
          style: 'destructive'
        }
      ],
    )

  }

  return (
    <>
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})