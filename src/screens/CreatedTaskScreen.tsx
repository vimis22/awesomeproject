import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Navbar from '../components/Navbar';
import NormalText from '../components/NormalText';
import ActionButton from '../components/ActionButton';
import InputFieldText from '../components/InputFieldText.tsx';

export interface Task {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    isCompleted: boolean;
}

const CreatedTaskScreen = ({ navigation }: any) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [isDeadlineExceeded, setIsDeadlineExceeded] = useState(false);

    const [tasks, setTasks] = useState<Task[]>([]);

    const checkDeadlineExceeded = (deadlineStr: string): boolean => {
        if (!deadlineStr) return false;
        const currentDate = new Date();
        const parsedDate = new Date(deadlineStr);
        return parsedDate.getTime() && parsedDate < currentDate;
    };

    const handleDeadlineChange = (text: string) => {
        setDeadline(text);
        setIsDeadlineExceeded(checkDeadlineExceeded(text));
    };

    const handleAddTask = () => {
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            description,
            deadline,
            isCompleted: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        setTitle('');
        setDescription('');
        setDeadline('');
        setIsDeadlineExceeded(false);

        console.log('A New Task has been added', newTask);
    };

    const navigationToCompletedTask = () => {
        navigation.navigate('CompletedTaskScreen', { tasks });
    };

    return (
        <SafeAreaView style={styles.pageContainer}>
            <Navbar text={'Created Task Screen'} />
            <View>
                <NormalText textColor={'#ffffff'} text={'All Tasks will be inserted inside the CompletedTask Screen'} />
                <View>
                    <InputFieldText title={'Task-Title'} value={title} onChangeText={setTitle} />
                    <InputFieldText title={'Description'} value={description} onChangeText={setDescription} />
                    <InputFieldText title={'Deadline'} value={deadline} onChangeText={handleDeadlineChange}
                        placeholder={new Date().toString()}
                        style={[styles.input, isDeadlineExceeded && styles.exceededDate]}
                    />

                    <ActionButton onPress={handleAddTask} title={'Add Task'} />
                    <ActionButton onPress={navigationToCompletedTask} title={'Go To Completed Tasks'} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreatedTaskScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#330099',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 12,
        fontSize: 16,
    },
    exceededDate: {
        backgroundColor: '#ffcccc',
    },
});
