import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import SplashScreen from './src/screens/SplashScreen';
import Task1 from './src/screens/Task1';
import Task2_2 from './src/screens/Task2_2.tsx';
import Task2_3 from './src/screens/Task2_3.tsx';
import Task3 from './src/screens/Task3.tsx';
import Task4 from './src/screens/Task4.tsx';
import Task5 from './src/screens/Task5.tsx';
import {TaskProvider} from './src/contexts/tasks.context.tsx';
import TaskDetails from './src/screens/TaskDetails.tsx';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <TaskProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SplashScreen">
                        <Stack.Screen name="SplashScreen" component={SplashScreen} />
                        <Stack.Screen name="Task1" component={Task1} />
                        <Stack.Screen name="Task2_2" component={Task2_2} />
                        <Stack.Screen name="Task2_3" component={Task2_3} />
                        <Stack.Screen name="Task3" component={Task3} />
                        <Stack.Screen name="Task4" component={Task4} />
                        <Stack.Screen name="Task5" component={Task5} />
                        <Stack.Screen name="TaskDetails" component={TaskDetails} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </TaskProvider>
    );
}
