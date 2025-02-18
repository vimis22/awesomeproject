import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface TextProps {
    text: string;
    fontSize?: number;
    textColor?: string;
    backgroundColor?: string;
    fontWeight?: number;
}

const Text: React.FC<TextProps> = ({
text, fontSize = 32, textColor = '#000000', backgroundColor = 'transparent', fontWeight}) => {
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

export default Text;
