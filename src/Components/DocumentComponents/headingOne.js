import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadingOne = ({ children }) => {
    return (
        <Text style={styles.textOne}>{children}</Text>
    )
}

export default HeadingOne

const styles = StyleSheet.create({
    textOne:{
      fontSize:11,
      color:'#000000',
      fontWeight:'800'
    }
})