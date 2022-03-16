import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, SectionList } from 'react-native'

const App = () => {
  const DATA = [
    { title: 'Learn React Native', data: ['Item 1', 'Item 2', 'Item 3']},
    { title: 'Learn PostgreSQL', data: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Learn Swift', data: ['Item 1'] },
    { title: 'Learn Flutter', data: ['Item 1', 'Item 2'] },
  ];

  return (
      <SafeAreaView style={styles.container}>
        <SectionList
          keyExtractor={index => index.toString()}
          sections={DATA}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{section.title}</Text>
            </View>
          )}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'lightblue'},
  item: { margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow' },
  text: { fontSize: 40, color: 'black', padding: 10 },
})

export default App