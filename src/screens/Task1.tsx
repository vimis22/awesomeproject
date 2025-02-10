import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import WhiteNormalText from '../components/resuable_components/WhiteNormalText.tsx';
import Navbar from '../components/resuable_components/Navbar.tsx';
const Task1 = ({navigation}: any ) => {
    return(
        <SafeAreaView style={styles.background}>
            <Navbar text={'Task1'}/>
            <WhiteNormalText text={'This is a text to show the completion of Task1'} />
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('Task2_2')}>
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
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
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

export default Task1;
