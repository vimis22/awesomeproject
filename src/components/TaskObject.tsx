import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

export interface TaskObjectProps {
    description: string;
    dueDate: string;
    completed: boolean;
    height?: number;
    width?: number;
}

const TaskObject: React.FC<TaskObjectProps> = ({description, dueDate, completed, height, width}) => {
    const containerStyle: StyleProp<ViewStyle> = [
        styles.container,
        height != null && { height },
        width != null && { width },
];

    return (
        <View style={containerStyle}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.dueDate}>Due: {dueDate}</Text>
            <Text style={styles.status}>{completed ? 'Completed' : 'Incomplete'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    description: {
        fontSize: 16,
    },
    dueDate: {
        color: '#888',
    },
    status: {
        fontStyle: 'italic',
    },
});

export default TaskObject;
