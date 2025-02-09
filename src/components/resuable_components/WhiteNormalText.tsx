import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface NormalTextProps {
    text: string;
    textColor?: string;
}

const NormalText: React.FC<NormalTextProps> = ({text}) => {
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
        padding: 10,
    },
});

export default NormalText;
