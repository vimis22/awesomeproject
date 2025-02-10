import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface NormalTextProps {
    text: string;
}

const WhiteNormalText: React.FC<NormalTextProps> = ({text}) => {
    return(
        <View>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
});

export default WhiteNormalText;
