import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation }from '@react-navigation/native';



export default function HomeScreen(){

const Navigation = useNavigation();

useEffect(() =>{
setTimeout(()=> Navigation.navigate('Profile'),5000)

},[])
  return(
    <View className="flex-1 justify-center items-center bg-blue-900 space-y-5">
          <View className="bg-white/60  rounded-full shadow-md shadow-gray-400" style={{padding: hp(5)}}>
            <Image source={require('../../images/boutique.png')} style = {{width:hp(20),height: hp(20)}}/>
          </View>
          <View className="flex items-center space-y-5">
          <Text className="font-bold text-white tracking-widest text-4xl" style={{fontStyle: 'italic'}}>BoutiqueIT</Text>
          <Text className="font-medium text-white tracking-widest text-lg" style={{fontStyle: 'italic'}}>Fashion never goes out of style</Text>
          </View>
        </View>
      );
};