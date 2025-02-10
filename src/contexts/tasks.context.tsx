import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TaskContextInterface {
    tasks: string[];
    addTask: (newTask: string) => void;
    removeTask: (taskToRemove: string) => void;
    clearTasks: () => void;
}

const TaskContext = createContext<TaskContextInterface>({
    tasks: [],
    addTask: () => {},
    removeTask: () => {},
    clearTasks: () => {},
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        const loadTasks = async () => {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        };
        loadTasks();
    }, []);

    useEffect(() => {
        const saveTasks = async () => {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        };
        saveTasks();
    }, [tasks]);

    const addTask = (newTask: string) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const removeTask = (taskToRemove: string) => {
        setTasks((prevTasks) => prevTasks.filter(task => task !== taskToRemove));
    };

    const clearTasks = async () => {
        setTasks([]);
        await AsyncStorage.removeItem('tasks');
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, clearTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
