import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItalicText = ({children}) => {
  return (
      <Text style={styles.textOne}>{children}</Text>
  )
}

export default ItalicText

const styles = StyleSheet.create({
    textOne:{
      fontSize:11,
      color:'#000000',
      fontStyle:'italic'
    }
})