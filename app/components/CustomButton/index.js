import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'

export default function index({label,style,onPress,labelStyle,labelAddationProps, lineBorder}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,lineBorder&& styles.lineBorder,  style]}> 
            <Label  text={label}  style={[styles.label,lineBorder&& styles.lineBorderLabel ,labelStyle]}  {...labelAddationProps}/> 
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        backgroundColor:appColors.primary,
        borderRadius:scale(14),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10)
    },
    label:{
        fontSize:scale(16),
        fontWeight:"500",
        color:appColors.white
    },
    lineBorder:{
        backgroundColor:appColors.white,
        borderWidth:scale(1),
        borderColor:appColors.primary
    },
    lineBorderLabel:{
       color:appColors.primary 
    }
})
