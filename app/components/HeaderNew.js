import { View, Text } from 'react-native';
import React from 'react';
import Label from './Label';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
export default function HeaderNew({left, center,right}) {

    const getWidth = ()=>{
         if(left&& center &&right){
             return "100%"
         }
         return "60%"
    }

  return (
      <View  style={{   alignItems:  left &&  center && right ? 'flex-start'  :'flex-end'  }} >

      
    <View style={{ width:getWidth(), flexDirection:'row', justifyContent:'space-between', alignContent:'center', alignItems:'center', height:scale(50),}} >
       {left&& <View style={{flexDirection:'row', alignItems:'center'}} >
            <MaterialIcons name="chevron-left" size={scale(25)} color={appColors.primary} /> 
        <Label text={left}   style={{color:appColors.primary}}/>     
        </View>}
       <Label text={center} />
       <Label text={right}  style={{color:appColors.primary}} />
    </View>
    </View>
  );
}
