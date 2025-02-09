import React from "react";
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";

const Task1 = ({navigation}: any) => {
    return(
        <TouchableOpacity>
            <Text>Welcome</Text>
            <View style={styles}>
                <Text>Please click on left corner to find the solutions to the exercises</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#330099'
    }
})
