import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BulletPoint = ({children}) => {
  return (
    <View style={styles.mainConatiner}>
        <View style={styles.viewOne}>
            <View style={styles.pointView} />
        </View>
        <View style={styles.viewTwo}>
        <Text style={styles.textOne}>{children}</Text>
        </View>
    </View>
  )
}

export default BulletPoint

const styles = StyleSheet.create({
    mainConatiner:{
     flexDirection:'row'
    },
    viewOne:{
        width:'20%',
        paddingTop:5,
        alignItems:"center",
    },
    pointView:{
        width:4,
        height:4,
        borderRadius:5,
        backgroundColor:'black'
    },
    viewTwo:{
        width:'80%',
    },
    textOne:{
        fontSize:11,
        color:'#000000',
        textAlign:'justify'
      }
})