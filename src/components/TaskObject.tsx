import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ActionButton from './ActionButton.tsx';
import type {Task} from '../screens/CreatedTaskScreen.tsx';

interface TaskObjectProps {
    task: Task;
    onComplete?: (taskId: string) => void;
}

const TaskObject: React.FC<TaskObjectProps> = ({task, onComplete}) => {
    return(
        <View style={styles.taskObject}>
            <Text style={styles.title}>{task.title}</Text>
            {task.description && <Text style={styles.description}>{task.description}</Text>}
            {task.deadline && <Text style={styles.deadline}>Deadline: {task.deadline}</Text>}
            {!task.isCompleted && onComplete && (
                <ActionButton onPress={() => onComplete(task.id)} title={'Go To Completed Tasks'} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    taskObject: {
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

export default TaskObject;
