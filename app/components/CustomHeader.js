import { View, Text,Image,Pressable } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
//Search
export default function CustomHeader({navigation}) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:scale( 20)}} >
      <Pressable onPress={()=>navigation.navigate("Search") }>
          <MaterialIcons name="edit" size={scale(32)} color={appColors.gray} />
      </Pressable> 
       
       <Image source={require("../assets/imgs/logo.png")} style={{width:scale(216), height:scale(26)}} resizeMode='contain'  />
      <Pressable onPress={()=>navigation.navigate("Search") }>
        <MaterialIcons name="search" size={scale(32)} color={appColors.gray} /> 
      </Pressable>
      

    </View>
  );
}
