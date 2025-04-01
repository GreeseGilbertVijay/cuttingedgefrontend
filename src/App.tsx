import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './context/ThemeContext';

import Home from './screens/Home';
import SendMail from './screens/SendMail';
import SingleBook from './screens/SingleBook'
import SplashScreen from './screens/splashScreen';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Main" component={Home} />
          <Stack.Screen name="SendMail" component={SendMail} />
          <Stack.Screen name="SingleBook" component={SingleBook} />
        </Stack.Navigator>  
        <StatusBar backgroundColor="black" style="light" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
