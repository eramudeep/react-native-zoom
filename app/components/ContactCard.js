import { View, Text } from 'react-native';
import React from 'react';
import Label from './Label';
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
import AvatarImage from './AvatarImage';

export default function ContactCard({item}) {
    const {  name, img  } =item
       return (<View style={{flexDirection:'row', alignItems:'center'}} >
            <AvatarImage source={img} size={scale(40)} />
            <View style={{marginLeft:scale( 20),    flex:1, paddingVertical:scale( 20), borderBottomWidth:scale(0.5), borderBottomColor:appColors.gray }} >
                <Label text={name} style={{fontSize:scale(17)}} />
            </View>
       </View>)
}
