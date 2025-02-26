import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NormalText from '../components/NormalText';
import ActionButton from '../components/ActionButton';
import InputFieldText from '../components/InputFieldText';
import type { Task } from '../screens/CreatedTaskScreen';

interface CreateTaskFormProps {
    onAddTask: (task: Task) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [isDeadlineExceeded, setIsDeadlineExceeded] = useState(false);

    const checkDeadlineExceeded = (deadlineStr: string): boolean => {
        if (!deadlineStr) return false;
        const currentDate = new Date();
        const parsedDate = new Date(deadlineStr);
        return parsedDate < currentDate;
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

        onAddTask(newTask);

        setTitle('');
        setDescription('');
        setDeadline('');
        setIsDeadlineExceeded(false);
    };

    return (
        <View style={styles.formContainer}>
            <NormalText textColor="#ffffff" text="Title" />
            <InputFieldText
                textColor="#ffffff"
                title="Task Title"
                value={title}
                onChangeText={setTitle}
            />

            <NormalText textColor="#ffffff" text="Description" />
            <InputFieldText
                textColor="#ffffff"
                title="Description"
                value={description}
                onChangeText={setDescription}
            />

            <NormalText textColor="#ffffff" text="Deadline Date" />
            <InputFieldText
                textColor="#ffffff"
                title="Deadline"
                value={deadline}
                onChangeText={handleDeadlineChange}
                placeholder={new Date().toString()}
                style={[styles.input, isDeadlineExceeded && styles.exceededDate]}
            />

            <ActionButton onPress={handleAddTask} title="Add Task" />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        marginVertical: 16,
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

export default CreateTaskForm;
