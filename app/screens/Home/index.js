import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList,Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setError} from '../../redux/actions';
import {} from 'react-native-gesture-handler';
import {features, starterIntro,homeScreen} from '../../utils/MockData';
import {appColors} from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Divider from '../../components/Divider';

import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Badge from '../../components/Badge';
import AvatarImage from '../../components/AvatarImage';
import CustomHeader from '../../components/CustomHeader';
export default function Home({navigation}) {

 const onPress= ()=>{
   navigation.navigate("Call")
 } 
  const _renderActions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: scale(20),
        }}>
        <CustomButton lineBorder style={{width: '45%'}} label={'Join'} />
        <CustomButton style={{width: '45%'}} label={'Host'} />
      </View>
    );
  };
  const _renderCategories = () => {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['ALL', 'Meetings', 'Chats', 'Channels']}
          ItemSeparatorComponent={()=> <View style={{padding:scale(10)}} />}
          renderItem={({item, index}) => <Badge  isActive={index==0} label={item} key={index} />}
        />
      </View>
    );
  };

  const ItemCard= ({item})=>{
    const {  name , time , img ,  agenda  }= item
    return  <Pressable onPress={onPress} style={{  justifyContent:'space-between', alignItems:'center', flexDirection:'row'}} >
    <AvatarImage source={img} size={scale(60)} />
    <View style={{ flex:1, paddingHorizontal:scale(10)}} >
      <View style={{ flex:1, justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
       <Label text={name}  />
       <Label text={time} style={{fontSize:scale(14), color:appColors.gray}} />
      </View>
      <Label text={ agenda} style={{fontSize:scale(15), color:appColors.gray}}  />
    </View>
</Pressable>
  }
  const _renderAll = ()=>{
    return  <View style={{paddingVertical:scale(16)}} >
      <FlatList
      data={homeScreen}
      ItemSeparatorComponent={()=> <View  style={{padding:scale(10)}} />}
      renderItem={({item,index} )=><ItemCard  item={item} key={index} />  }
      />
      
    </View>
  }
  return (
    <Container>
      <CustomHeader navigation={navigation} />
      {_renderActions()}
      {_renderCategories()}
      {_renderAll()}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
