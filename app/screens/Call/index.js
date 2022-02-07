import { View, Text,ImageBackground, Pressable, FlatList } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Label from '../../components/Label';
import { scale } from 'react-native-size-matters';
import { appColors } from '../../utils/appColors';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { usersOnCall } from '../../utils/MockData';

export default function index() {
const UserCard = ({item})=>{
    const {  name,  img}= item
    return  <ImageBackground source={img } style={{width: scale( 178), height: scale( 308),}}  >
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:scale(20), paddingHorizontal:scale(10) }} >
            <Label text={name} style={{color:appColors.white}} />
             <Pressable style={{backgroundColor:appColors.gray, padding:scale(10), borderRadius:scale(8)}} >
                    <MaterialIcons name="volume-mute" color={appColors.white} size={scale(20)}/>
             </Pressable>
        </View>  
        </ImageBackground>
            
     
}
const _renderCallers = ()=>{
    return <View>
        <FlatList
        data={usersOnCall}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=><UserCard  item={item} key={index} />}
        numColumns={2}
        /> 
    </View>
}
const _renderShareScreen = ()=>{
    return <View style={{ justifyContent:'center', alignItems:'center'}} >
         <View  style={{ flexDirection:'row', padding:scale(10), alignItems:'center', justifyContent:'center'}}  >
         <MaterialIcons name="ios-share" color={appColors.black} size={scale(24)}/>
                <Label text={"Share Screen"} style={{paddingHorizontal:scale(10)}}  /> 
         </View>
    </View>
}

const _renderBottomActions = ()=>{
    return <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:scale(80) }} >
                <Pressable style={{ padding:scale(10), borderRadius:scale(8)}} >
                    <MaterialIcons name="phone-disabled" color={appColors.red} size={scale(32)}/>
             </Pressable>
             <Pressable style={{ padding:scale(10), borderRadius:scale(8)}} >
                    <MaterialIcons name="chat" color={appColors.gray} size={scale(32)}/>
             </Pressable>
             <Pressable style={{ padding:scale(10), borderRadius:scale(8)}} >
                    <MaterialIcons name="mic" color={appColors.gray} size={scale(32)}/>
             </Pressable>
             <Pressable style={{ padding:scale(10), borderRadius:scale(8)}} >
                    <MaterialIcons name="videocam" color={appColors.gray} size={scale(32)}/>
             </Pressable>
    </View>
}

  return (
     <Container contentContainerStyle={{paddingHorizontal:scale(0),}} isScrollable >
         {_renderShareScreen()}
       {_renderCallers()}
       {_renderBottomActions()}
    </Container>
  );
}
