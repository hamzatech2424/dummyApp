import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import ChatBar from '../Components/chatBar'

const socket = io("http://192.168.18.92:3000")


const ChatScreen = () => {

    const [input, setInput] = useState('')
    const [messageArray, setMessagesArray] = useState([])


    const onSendBtnPress = () => {
        socket.emit('chat message', input)
        setInput('')
    }


    useEffect(() => {

        // const socket = io("http://192.168.18.92:3000")
        socket.on('chat message', (msg) => {
            setMessagesArray([...messageArray, msg])
        })

    }, [])


    return (
            <KeyboardAvoidingView
            behavior={'height'}
            keyboardVerticalOffset={0}
            style={styles.mainConatiner}
            >
                <View style={{width:'100%',height:50}} />

                {messageArray.map((item, index) => {
                    return (<Text key={index} >{item}</Text>)
                })}


                <ChatBar
                    value={input}
                    onChangeText={(txt) => setInput(txt)}
                    onSend={onSendBtnPress}
                />

            </KeyboardAvoidingView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1
    }
})