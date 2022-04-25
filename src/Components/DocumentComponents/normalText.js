import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NormalText = ({children,style}) => {
  return (
      <Text style={[styles.textOne,style]}>{children}</Text>
  )
}

export default NormalText

const styles = StyleSheet.create({
    textOne:{
      fontSize:11,
      color:'#000000',
      textAlign:'justify'
    }
})