import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback,View, Platform } from 'react-native'

interface Props {
    title: string,
    onPress: () => void;
    position?: 'br'|'bl';
}

export const Fab = ( {title, onPress, position='br'}: Props) => {
    
   

    const android = () => {
        return (
            <View style={
                (position === 'bl')
                    ? (styles.fabLocationBL)
                    : (styles.fabLocationBR)
            }> 
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                    
                </TouchableNativeFeedback> 
            </View>
        )
    }           

    return  android();
}

const styles = StyleSheet.create ({
    fabLocationBR: {
        position: 'absolute',
        bottom: 25, // con respecto al origen del padre
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25, // con respecto al origen del padre
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})