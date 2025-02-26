import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import TaskObject from './TaskObject.tsx';
import {Task} from '../screens/CreatedTaskScreen.tsx';

interface TaskListProps{
    tasks: Task[];
    onCompleteTask?: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteTask }) => {
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TaskObject task={item} onComplete={onCompleteTask} />
            )}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        marginBottom: 20,
    },
});

export default TaskList;
