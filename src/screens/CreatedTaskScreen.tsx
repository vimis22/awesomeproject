import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Navbar from '../components/Navbar';
import NormalText from '../components/NormalText';
import ActionButton from '../components/ActionButton';
import CreateTaskForm from '../components/CreateTaskForm.tsx';
import {scheduleTaskNotification} from '../contexts/TaskNotification.ts';

export interface Task {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    isCompleted: boolean;
}

const CreatedTaskScreen = ({navigation}: any) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        scheduleTaskNotification(newTask);
    }

    const navigationToCompletedTask = () => {
        navigation.navigate('CompletedTaskScreen', {tasks});
    }

    return (
        <SafeAreaView style={styles.pageContainer}>
            <Navbar text={'Created Task Screen'} />
            <View>
                <NormalText textColor={'#ffffff'} text={'All tasks will be shown in the Completed Task Screen'} />
                <CreateTaskForm onAddTask={handleAddTask} />
                <ActionButton onPress={navigationToCompletedTask} title={'Go To Completed Tasks'} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#330099',
    },
});

export default CreatedTaskScreen;
