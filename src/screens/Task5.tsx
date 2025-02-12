import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import Navbar from '../components/resuable_components/Navbar.tsx';
import TaskItem from '../components/resuable_components/TaskItem.tsx';
import { useTasks } from '../contexts/tasks.context.tsx';
import ActionButton from '../components/resuable_components/ActionButton.tsx';

const Task5 = ({ navigation }: any) => {
    const { tasks, addTask, clearTasks } = useTasks();
    const [newTask, setNewTask] = useState<string>('');

    return (
        <SafeAreaView style={styles.background}>
            <Navbar text={'Task5'} />

            <View style={styles.textInputContainer}>
                <TextInput
                    value={newTask}
                    style={styles.textInputField}
                    placeholder={'Enter a New Task...'}
                    placeholderTextColor={'#aaa'}
                    onChangeText={text => setNewTask(text)}
                />
                <TouchableOpacity style={styles.addButton} onPress={() => {
                    if (newTask.trim()) {
                        addTask(newTask);
                        setNewTask('');
                    }
                }}>
                    <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            {tasks.length === 0 ? (
                <Text style={styles.nullExistedTask}>No Task Defined Yet!</Text>
            ) : (
                <FlatList
                    style={styles.taskContainer}
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TaskItem title={item} onPressGoToDetails={() => navigation.navigate('TaskDetails', { task: item })} />
                    )}
                />
            )}

            {tasks.length > 0 && (
                <View style={styles.buttonWrapper}>
                    <ActionButton onPress={clearTasks} title="Clear all tasks" backgroundColor="#ffec00" textColor="#000000" />
                </View>
            )}

            <View style={styles.buttonWrapper}>
                <ActionButton onPress={() => navigation.navigate('TaskDetails')} title="Go to Next Screen" backgroundColor="#ffec00" textColor="#000000" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#330099',
        flex: 1,
    },
    textInputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16,
    },
    textInputField: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    addButton: {
        backgroundColor: '#ffec00',
        justifyContent: 'center',
        borderRadius: 6,
        width: 60,
    },
    addBtnText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    divider: {
        height: 6,
        backgroundColor: '#ff0042',
        marginBottom: 10,
    },
    taskContainer: {
        paddingTop: 10,
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: '#ffec00',
        borderRadius: 10,
        padding: 10,
    },
    nextScreenText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nullExistedTask: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    removeBtnContainer: {
        backgroundColor: '#ff6a00',
        borderRadius: 10,
        padding: 10,
    },
});

export default Task5;
