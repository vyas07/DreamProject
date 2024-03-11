
import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue } from 'react-native-reanimated';

import * as React from 'react';

export default function HomeScreen(){
  return(
    <View className="flex-1 justify-center items-center bg-purple-500 space-y-5">
          <View className="bg-white/20  rounded-full shadow-md shadow-gray-400" style={{padding: hp(5)}}>
            <Image source={require('../../images/boutique.png')} style = {{width:hp(20),height: hp(20)}}/>
          </View>
          <View className="flex items-center space-y-5">
          <Text className="font-bold text-white tracking-widest text-4xl">BoutiqueIT</Text>
          <Text className="font-medium text-white tracking-widest text-lg">Fashion never goes out of style</Text>
          </View>
        </View>
      );
};