import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import ChefsLogin from './screens/ChefsLogin';
import ChefsMenu from './screens/ChefsMenu';
import Menu from './screens/Menu';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Baithe': require('./assets/fonts/baithe.otf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='ChefsLogin' component={ChefsLogin} options={{ headerShown: false }} />
        <Stack.Screen name='ChefsMenu' component={ChefsMenu} options={{headerShown: false}}/>
        <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
        
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
