import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const ChatBar = ({ value, onChangeText, onSend }) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <TextInput
                    style={{ width: '100%', height: '100%', paddingLeft: 10 }}
                    placeholder='Enter Message'
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.viewTwo}>
                <TouchableOpacity
                    style={styles.btnView}
                    onPress={onSend} >
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatBar

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },
    viewOne: {
        flex: 1
    },
    viewTwo: {
        width: '20%',
        height: '100%'
    },
    btnView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
})