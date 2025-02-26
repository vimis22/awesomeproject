import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import type { Task } from './CreatedTaskScreen';
import Navbar from '../components/Navbar.tsx';
import ActionButton from '../components/ActionButton';
import NormalText from '../components/NormalText.tsx';
import TaskList from "../components/TaskList.tsx";

const CompletedTaskScreen = ({ route }: any) => {
    const { tasks = [] } = route.params || {};
    const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
    const completedTasks = localTasks.filter((task: Task) => task.isCompleted);
    const inProgressTasks = localTasks.filter((task: Task) => !task.isCompleted);

    const moveToCompletedTask = (taskId: string) => {
        setLocalTasks((prevTasks) =>
            prevTasks.map((item) =>
                item.id === taskId ? {...item, isCompleted: true} : item
            )
        );
    };

    const removeAllTasks = () => {
        setLocalTasks([]);
    }

    return(
        <View style={styles.container}>
            <Navbar text={'Completed Task Screen'} />
            <NormalText textColor={'#ffffff'} text={'In Progress Tasks'} fontWeight={'bold'} fontSize={18} />
            {inProgressTasks.length === 0 ? (
                <NormalText textColor={'#ffffff'} text={'No Task Created'} fontSize={16} />
            ) : (
                <TaskList tasks={inProgressTasks} onCompleteTask={moveToCompletedTask} />
            )}

            <NormalText textColor={'#ffffff'} text={'Completed Tasks'} fontSize={18} />
            {completedTasks.length === 0 ? (
                <NormalText textColor={'#ffffff'} text={'No Task Created'} fontSize={16} />
            ) : (
                <TaskList tasks={completedTasks} />
            )}

            <ActionButton onPress={removeAllTasks} title={'Remove All Tasks'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#330099',
    },
});

export default CompletedTaskScreen;

