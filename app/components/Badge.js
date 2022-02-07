import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import Label from './Label';
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';

export default function Badge({label,isActive}) {
  return (
    <View  style={[styles.container,isActive? styles.active : styles.InActive]} >
      <Label text={ label} style={[{color:appColors.white},!isActive&& styles.InActiveLabel]}  /> 
    </View>
  );
}

const styles=StyleSheet.create({
container:{ paddingHorizontal:scale(20),  height:scale(  32),  justifyContent:'center', alignItems:'center',borderRadius: scale(20) },
active:{

    backgroundColor:appColors.gray,
},
InActive:{
   borderColor:appColors.gray,
   borderWidth:scale(1)
},
InActiveLabel:{
    color:appColors.gray 
 }
})