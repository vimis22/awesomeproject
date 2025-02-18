import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface NavbarProps{
    text: string;
}

const Navbar: React.FC<NavbarProps> = ({text}) => {
    return(
        <View style={styles.navbarContainer}>
            <TouchableOpacity>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff0044',
        height: 50,
        width: '100%',
        marginBottom: 10,
     },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default Navbar;
