import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        // la view es limitada por el contenido de su hijo
        <View style={ styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        paddingHorizontal: 100,
        paddingVertical:20,
        marginHorizontal:20,
        // padding: 10,
        // margin:20,
        fontSize: 20,
        // width: 250,
        // backgroundColor: 'red'
        borderWidth: 10
    }
})