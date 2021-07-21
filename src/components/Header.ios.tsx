import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

import logoImg from '../assets/icons/to.do.png';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
 const taskCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgLogo} source={logoImg} />

        <Text style={styles.tasksText}>Você tem</Text>
        <Text style={[styles.taskState, {fontWeight: 'bold'}]}>{tasksCounter} {taskCounterText}</Text>
       
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    alignItems: 'center',
    
  },
  header: {
    paddingBottom: 55,
    backgroundColor: '#8257E5',
    flexDirection: 'row',
    marginVertical: 10,

  },
  imgLogo: {
    marginTop: 15 
  },
  tasksText: {
    color: '#FFF',
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 100,
    marginTop: 15   
    
  },
  taskState: {
    color: '#FFF',
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 5,
    marginTop: 15
  }
});
