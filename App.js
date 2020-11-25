import 'react-native-gesture-handler'
import * as React from 'react'
import { StyleSheet, AppRegistry } from 'react-native'
import Home from './screens/Home'
import Liked from './screens/Liked'
import ShoppingCart from './screens/ShoppingCart'
import About from './screens/About'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import store from './Redux/store'
import { Provider } from 'react-redux'
import BadgeIcon from './components/BadgeIcon'


const color="#F53E52"

const Tab = createMaterialBottomTabNavigator()
function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Accueil"
        activeColor="#F53E52"
        inactiveColor="gray"
        barStyle={{ backgroundColor: 'white', paddingBottom: 3 }}
    >
      <Tab.Screen 
        name="Accueil" 
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen 
        name="Liked" 
        component={Liked}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen 
        name="ShoppingCart" 
        component={ShoppingCart}
        options={{
          tabBarLabel: 'Pannier',
          tabBarIcon: ({ color }) => (
            <BadgeIcon color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="About" 
        component={About}
        options={{
          tabBarLabel: 'A propos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  )
}


export default App