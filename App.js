import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SRC/splashscreen';
import { Main } from './SRC/main';
import { AuthScreen } from './SRC/AuthScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DataFetchingComponent, ViewReport } from './SRC/View';
import HomePage from './SRC/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

  function App() {

  const DrawerNavs = ()=>{

   return(
    <Drawer.Navigator
    initialRouteName="Home"
    drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 5 },
    }}
  >
    <Drawer.Screen name="Home" component={SplashScreen} />
    <Drawer.Screen name="AuthScreen" component={AuthScreen}/>
    <Drawer.Screen name="Report Page" component={Main} />
    <Drawer.Screen name="View Reports" component={DataFetchingComponent} />



  </Drawer.Navigator>
   )
  }

  const Nav = ()=>{

    <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="AuthScreen" component={AuthScreen} />
    <Stack.Screen name="MainApp" component={Main} />
  </Stack.Navigator>
  }


  return (
    <>
    

     <NavigationContainer>
      <DrawerNavs/>
  </NavigationContainer> 
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App

 
