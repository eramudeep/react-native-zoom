import { View, Text,FlatList } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import ContactCard from '../../components/ContactCard';
import { users } from '../../utils/MockData';
import { scale } from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
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
      <HeaderNew  center="Contacts" right="Add" />
        <CustomInput placeholder={"Search"} />
      {_renderContacts()} 
    </Container>
  );
}
