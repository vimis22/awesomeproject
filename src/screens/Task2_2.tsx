import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text, View, TextInput, Button, ScrollView} from 'react-native';
import Navbar from '../components/resuable_components/Navbar.tsx';
import WhiteNormalText from '../components/resuable_components/BlackNormalText.tsx';
const Task2_2 = ({navigation}: any ) => {
    return(
        <SafeAreaView style={styles.background}>
            <Navbar text={'Task2_1 & Task2_2'} />

            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInputField}
                    placeholder={'Enter a New Task....'}
                    placeholderTextColor={'#aaa'}
                />
                <TouchableOpacity style={styles.addButton} onPress={() => {
                    console.log('Adding More Tasks');
                }}>
                    <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider}/>

            <ScrollView style={styles.taskContainer}>
                <View style={styles.tasks}>
                    <View style={styles.taskTextContainer}>
                        <WhiteNormalText text={'This is a task to complete'} />
                    </View>
                    <Button title={'Done'} onPress={() => { }} />
                </View>

                <View style={styles.tasks}>
                    <View style={styles.taskTextContainer}>
                        <WhiteNormalText text={'This is a task to complete'} />
                    </View>
                    <Button title={'Done'} onPress={() => { }} />
                </View>

                <View style={styles.tasks}>
                    <View style={styles.taskTextContainer}>
                        <WhiteNormalText text={'This is a task to complete'} />
                    </View>
                    <Button title={'Done'} onPress={() => { }} />
                </View>
            </ScrollView>


            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Task2_3')}>
                    <Text style={styles.nextScreenText}>Click to next screen</Text>
                </TouchableOpacity>
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
        marginHorizontal: 16
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
});

export default Task2_2;
