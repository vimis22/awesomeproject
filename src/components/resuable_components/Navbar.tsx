import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface NavbarProps{
    path: any;
    navigation: any;
    text: string;
}

const Navbar: React.FC<NavbarProps> = ({path,navigation,text}) => {
    return(
        <View style={styles.navbarContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(path)}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        height: 100,
        width: '100%',
        marginBottom: 10,
     },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Navbar;
