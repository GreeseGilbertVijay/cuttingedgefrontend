import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './screens/Home';
import SendMail from './screens/SendMail';
import Oct2023 from './screens/FlipBook2023/Oct2023';
import Nov2023 from './screens/FlipBook2023/Nov2023';
import Dec2023 from './screens/FlipBook2023/Dec2023';
import Jan2024 from './screens/FlipBook2024/Jan2024';
import Feb2024 from './screens/FlipBook2024/Feb2024';
import Mar2024 from './screens/FlipBook2024/Mar2024';
import Apr2024 from './screens/FlipBook2024/Apr2024';
import May2024 from './screens/FlipBook2024/May2024';
import Jun2024 from './screens/FlipBook2024/Jun2024';
import Jul2024 from './screens/FlipBook2024/Jul2024';
import Aug2024 from './screens/FlipBook2024/Aug2024';
import Sep2024 from './screens/FlipBook2024/Sep2024';
import Oct2024 from './screens/FlipBook2024/Oct2024';
import Nov2024 from './screens/FlipBook2024/Nov2024';
import Dec2024 from './screens/FlipBook2024/Dec2024';
import Jan2025 from './screens/FlipBook2025/Jan2025';
import Feb2025 from './screens/FlipBook2025/Feb2025';

enableScreens(); // Add this

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Home} />
          <Stack.Screen name="SendMail" component={SendMail} />
          <Stack.Screen name="Oct2023" component={Oct2023} />
          <Stack.Screen name="Nov2023" component={Nov2023} />
          <Stack.Screen name="Dec2023" component={Dec2023} />
          <Stack.Screen name="Jan2024" component={Jan2024} />
          <Stack.Screen name="Feb2024" component={Feb2024} />
          <Stack.Screen name="Mar2024" component={Mar2024} />
          <Stack.Screen name="Apr2024" component={Apr2024} />
          <Stack.Screen name="May2024" component={May2024} />
          <Stack.Screen name="Jun2024" component={Jun2024} />
          <Stack.Screen name="Jul2024" component={Jul2024} /> 
          <Stack.Screen name="Aug2024" component={Aug2024} />
          <Stack.Screen name="Sep2024" component={Sep2024} />
          <Stack.Screen name="Oct2024" component={Oct2024} />
          <Stack.Screen name="Nov2024" component={Nov2024} />
          <Stack.Screen name="Dec2024" component={Dec2024} />
          <Stack.Screen name="Jan2025" component={Jan2025} />
          <Stack.Screen name="Feb2025" component={Feb2025} />
        </Stack.Navigator>  
        <StatusBar backgroundColor="black" style="light" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
