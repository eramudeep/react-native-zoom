import React from 'react'
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'

export default function Container({children,isScrollable, contentContainerStyle}) {
    return ( 
        <SafeAreaView style={styles.container}>
            {
                isScrollable? <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[styles.innerView,contentContainerStyle]}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={[styles.innerView,contentContainerStyle]}>{children}</View>
            }
        </SafeAreaView>
      
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
         
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20),
        backgroundColor:appColors.white
    }
})
