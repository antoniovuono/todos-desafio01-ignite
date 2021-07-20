import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>

        <Text style={styles.tasksText}>Você tem</Text>
        <Text style={[styles.taskState, {fontWeight: 'bold'}]}>3 tarefas</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
  },
  header: {
    paddingBottom: 45,
    backgroundColor: '#8257E5',
    flexDirection: 'row',
    marginHorizontal: 40,
    

  },
  headerText: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
   
  
  },
  tasksText: {
    color: '#FFF',
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 100
    
  },
  taskState: {
    color: '#FFF',
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 5
  }
});
