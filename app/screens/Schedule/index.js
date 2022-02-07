import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Label from '../../components/Label';
import AvatarImage from '../../components/AvatarImage';
import { scale } from 'react-native-size-matters';
import { appColors } from '../../utils/appColors';
import { homeScreen } from '../../utils/MockData';
import HeaderNew from '../../components/HeaderNew';

 
export default function index() {

   const ItemCard = ({item})=>{
       const {  name , time , img ,  agenda, }=item
       return<View style={{backgroundColor:'rgba(245, 245, 245, 0.6)', padding:scale(10), borderRadius:scale(13)}} >
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
           <View style={{flexDirection:'row', alignItems:'center'}} >
                 <AvatarImage source={img} size={scale(20)}  />
                <Label text={name}  style={{fontSize:scale(13), color:appColors.gray, paddingHorizontal:scale(10)}} />       
           </View>
            <Label text={time}  style={{fontSize:scale(13), color:appColors.gray, paddingHorizontal:scale(10)}}/>       
        </View>
        <View style={{paddingVertical:scale(10)}}>
            <Label text={agenda} />
        </View>
       </View>
   } 
  return (
    <Container>
      <HeaderNew  center="Schedule" right="Add" />
        <FlatList
        data={homeScreen}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={()=> <View  style={{padding:scale(7)}} /> }
        renderItem={({item,index})=> <ItemCard  item={item} key={index} /> }
         />
       
    </Container>
  );
}
