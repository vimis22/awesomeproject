import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface NormalTextProps {
    text: string;
    fontSize?: number;
    textColor?: string;
    backgroundColor?: string;
    fontWeight?: number;
}

const NormalText: React.FC<NormalTextProps> = ({text, fontSize = 20, textColor = '#000000', backgroundColor = 'transparent', fontWeight}) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.text, {fontSize, color: textColor, fontWeight: fontWeight?.toString()}]}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
    },
});

export default NormalText;
