import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TaskItemProps {
    title: string;
    onPressGoToDetails: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, onPressGoToDetails }) => {
    return (
        <TouchableOpacity style={styles.taskContainer} onPress={onPressGoToDetails}>
            <Text style={styles.taskText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    taskText: {
        fontSize: 18,
    },
});

export default TaskItem;
