import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>TWD</Text>
      <Button 
        title='TWD YT' 
        onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ')}} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    margin: 10,
  },
})

export default App