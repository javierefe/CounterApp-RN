import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

           
            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={ () => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
                
            </TouchableOpacity> */}

            <Fab 
                title="+1"
                onPress={() => setContador(contador + 1)}
            />

            <Fab 
                title="-1"
                position="bl"
                onPress={() => setContador(contador - 1)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign:'center',
        fontSize: 40,
        top: -15
    },
   
})
