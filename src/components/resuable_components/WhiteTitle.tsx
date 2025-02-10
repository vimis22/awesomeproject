import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface NormalTextProps {
    text: string;
}

const WhiteTitle: React.FC<NormalTextProps> = ({text}) => {
    return(
        <View>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    },
});

export default WhiteTitle;
