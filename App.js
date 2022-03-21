import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="First"
          drawerPosition='left'
          drawerType="front"
          edgeWidth={100}
          hideStatusBar={false}
          overlayColor='#00000090'
          drawerStyle={{
            backgroundColor: '#e6e6e6',
            width: 250
          }}
        >
          <Drawer.Screen
            name="First"
            component={FirstScreen}
            initialParams={{ name: 'This is from Drawer', id: 95 }}
          />
          <Drawer.Screen
            name="Second"
            component={SecondScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App;