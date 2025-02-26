import React from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle, View} from 'react-native';

interface InputFieldTextProps{
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    multiline?: boolean;
    numberOfLines?: number;
    exceededDate?: boolean;
    backgroundColor?: string;
    textColor?: string;
}

const InputFieldText: React.FC<InputFieldTextProps> = ({value, onChangeText, placeholder, multiline = false, numberOfLines = 1, exceededDate = false, backgroundColor, textColor}) => {
    const inputStyle: StyleProp<TextStyle> = {
        backgroundColor: backgroundColor,
        color: textColor,
    };

    return(
        <View style={[styles.container]}>
            <TextInput
                style={[styles.input, inputStyle, exceededDate && styles.expireDate]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 4,
        fontSize: 16,
    },
    expireDate: {
        backgroundColor: '#ffcccc',
    },
});

export default InputFieldText;
