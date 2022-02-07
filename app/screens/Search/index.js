import { View, Text,FlatList } from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import Container from '../../components/Container';
import AvatarImage from '../../components/AvatarImage';
import { scale } from 'react-native-size-matters';
import Label from '../../components/Label';
import { users } from '../../utils/MockData';
import { appColors } from '../../utils/appColors';
import ContactCard from '../../components/ContactCard';
import HeaderNew from '../../components/HeaderNew';
 
export default function index() {
 
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
      <HeaderNew  left="Back" center="Search" right="Add" />
        <CustomInput placeholder={"Search"} />
       {_renderContacts()}
    </Container>
  );
}
