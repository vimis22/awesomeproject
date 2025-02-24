import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../components/Navbar.tsx';
import TaskItem from '../components/TaskItem.tsx';
import ActionButton from '../components/ActionButton.tsx';
import AddButton from '../components/AddButton.tsx';
import NormalText from '../components/NormalText.tsx';

const Task4 = ({navigation}: any) => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        const loadTasks = async() => {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if(storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        };
        loadTasks();
    }, []);

    useEffect(() => {
        const saveTasks = async() => {
            await AsyncStorage.setItem('tasks',JSON.stringify(tasks));
        };
        saveTasks();
    }, [tasks]);

    const removeAllTasks = async() => {
        setTasks([]);
    };

    return(
        <SafeAreaView style={styles.background}>
            <Navbar text={'Task4'}/>

            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInputField}
                    placeholder={'Enter a New Task....'}
                    placeholderTextColor={'#aaa'}
                    onChangeText = {text => setNewTask(text)}
                />

                <AddButton onPress={() =>{
                    setTasks([...tasks, newTask]);
                    setNewTask('');
                }} title={'Add'} />
            </View>

            <View style={styles.divider}/>

            {
                tasks.length === 0 ? (
                    <NormalText text={'No Task Defined Yet!'} textColor={'#ffffff'} />
                ) : (
                    <FlatList
                        style={styles.taskContainer}
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <TaskItem title={item} onPress={() => {
                            setTasks(tasks.filter(task => task !== item));
                        }} /> }
                    />
                )
            }

            {
                tasks.length > 0 && (
                    <View style={styles.buttonWrapper}>
                        <ActionButton onPress={removeAllTasks} title={'Clear All Tasks'} backgroundColor={'#ff6a00'} />
                    </View>
                )
            }

            <View style={styles.buttonWrapper}>
                <ActionButton onPress={() => navigation.navigate('Task5')} title={'Click to next screen'} backgroundColor={'#ffec00'} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#330099',
        flex: 1,
    },
    headerContainer: {
        padding: 20,
        backgroundColor: '#FF004220',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
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
    tasks: {
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderRadius: 10,
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    taskTextContainer: {
        flex: 1,
        justifyContent: 'center',
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

export default Task4;
