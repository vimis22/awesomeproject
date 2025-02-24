import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import SplashScreen from './src/screens/SplashScreen';
import Task4 from './src/screens/Task4.tsx';
import Task5 from './src/screens/Task5.tsx';
import {TaskProvider} from './src/contexts/tasks.context.tsx';
import TaskDetails from './src/screens/TaskDetails.tsx';
import CreatedTaskScreen from './src/screens/CreatedTaskScreen.tsx';
import CompletedTaskScreen from './src/screens/CompletedTaskScreen.tsx';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <TaskProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SplashScreen">
                        <Stack.Screen name="SplashScreen" component={SplashScreen} />
                        <Stack.Screen name="Task4" component={Task4} />
                        <Stack.Screen name="Task5" component={Task5} />
                        <Stack.Screen name="TaskDetails" component={TaskDetails} />
                        <Stack.Screen name="CreatedTaskScreen" component={CreatedTaskScreen} />
                        <Stack.Screen name="CompletedTaskScreen" component={CompletedTaskScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </TaskProvider>
    );
}
