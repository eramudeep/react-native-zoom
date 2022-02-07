import { View, Text,FlatList } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import Container from '../../components/Container';
import AvatarImage from '../../components/AvatarImage';
import { scale } from 'react-native-size-matters';
import Label from '../../components/Label';
import { users } from '../../utils/MockData';
import { appColors } from '../../utils/appColors';

export default function index() {

   const ContactCard = ({item})=>{
       const {  name, img  } =item
       return <View style={{flexDirection:'row', alignItems:'center'}} >
            <AvatarImage source={img} size={scale(40)} />
            <View style={{marginLeft:scale( 20),    flex:1, paddingVertical:scale( 20), borderBottomWidth:scale(0.5), borderBottomColor:appColors.gray }} >
                <Label text={name} style={{fontSize:scale(17)}} />
            </View>
       </View>
   } 
  const _renderContacts = ()=>{
      return <View>
          <FlatList
            data={users}
            ItemSeparatorComponent={()=> <View style={{padding:scale(5)}} />}
            renderItem={ ({item,index})=><ContactCard  item={item} key={index} />}
          />
            
      </View>
  }  
  return (
    <Container>
        <CustomInput placeholder={"Search"} />
       {_renderContacts()}
    </Container>
  );
}
