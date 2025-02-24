import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AddButtonProps {
    onPress: () => void;
    title: string;
    backgroundColor?: string;
    textColor?: string;
}

const AddButton: React.FC<AddButtonProps> = ({onPress, title, backgroundColor = '#ffec00', textColor = '#000000'}) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffec00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        width: 60,
        height: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AddButton;
