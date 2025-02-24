import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import type { Task } from './CreatedTaskScreen';
import Navbar from '../components/Navbar.tsx';
import ActionButton from '../components/ActionButton';
import NormalText from '../components/NormalText.tsx';

const CompletedTaskScreen = ({ route }: any) => {
    const { tasks = [] } = route.params || {};
    const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
    const completedTasks = localTasks.filter((task: Task) => task.isCompleted);
    const inProgressTasks = localTasks.filter((task: Task) => !task.isCompleted);

    const moveToCompletedTask = (taskId: string) => {
        setLocalTasks((prevTask) =>
            prevTask.map((item) =>
                item.id === taskId ? {...item, isCompleted: true} : item
            )
        );
    };

    const removeAllTasks = () => {
        setLocalTasks([]);
    };

    const renderItem = ({ item }: { item: Task }) => (
        <View style={styles.taskItem}>
            <Text style={styles.title}>{item.title}</Text>
            {item.description && <Text style={styles.description}>{item.description}</Text>}
            {item.deadline && <Text style={styles.deadline}>Deadline: {item.deadline}</Text>}

            {!item.isCompleted && (
                <View>
                    <ActionButton onPress={() => moveToCompletedTask(item.id)} title={'Move to Complete'} />
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Navbar text={'Completed Task Screen'} />

            <NormalText textColor={'#ffffff'} fontWeight={'bold'} text={'In Progress Tasks'} fontSize={18} />
            {inProgressTasks.length === 0 ? (
                <NormalText textColor={'#ffffff'} text={'No Task Created'} fontSize={16} />
            ) : (
                <FlatList
                    data={inProgressTasks}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{ marginBottom: 20 }}
                />
            )}

            <NormalText textColor={'#ffffff'} fontWeight={'bold'} text={'Completed Tasks'} fontSize={18}/>
            {completedTasks.length === 0 ? (
                <NormalText textColor={'#ffffff'} text={'No Task Accomplished'} fontSize={16} />
            ) : (
                <FlatList
                    data={completedTasks}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{ marginBottom: 20 }}
                />
            )}

            <ActionButton onPress={removeAllTasks} title="Remove All Tasks" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#330099',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
    },
    noTasksText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 16,
    },
    taskItem: {
        backgroundColor: '#f9f9f9',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        marginBottom: 4,
        color: '#444',
    },
    deadline: {
        fontSize: 12,
        color: '#777',
    },
});

export default CompletedTaskScreen;

