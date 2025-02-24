import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface InputFieldTextProps{
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    multiline?: boolean;
    numberOfLines?: number;
    exceededDate?: boolean;
}

const InputFieldText: React.FC<InputFieldTextProps> = ({value, onChangeText, placeholder, multiline = false, numberOfLines = 1, exceededDate = false}) => {

    return(
        <View style={[styles.container]}>
            <TextInput
                style={[styles.input, exceededDate && styles.expireDate]}
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
