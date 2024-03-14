
import {View , Text , StatusBar , ScrollView, Image , TextInput} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { BellIcon , MagnifyingGlassIcon } from 'react-native-heroicons/outline';


export default function ProfileScreen(){
  return(
      <View className="flex-1 bg-white">
               <StatusBar style="dark"/>
               <ScrollView showsVerticalIndicator={false}
               contentContainerStyle={{paddingBottom:50}}
               className="space-y-6 pt-14" >
               <View className="mx-2 flex-row justify-between item-center mb-2">
                       <Image source={require('../../images/icon.png')} style = {{width:hp(5.5),height: hp(5)}}/>
                       <BellIcon size={hp(4)} color="gray" />
                </View>

                <View className="mx-2 space-y-2 mb-2">

                <View className="mx-2 flex-row justify-between item-center mb-2">
                      <Text style={{fontSize: hp(1.7)}} className="text-neutral-600 font-bold">Hello, Poornima!</Text>
                 </View>

                  <View className="mx-2 flex-row justify-between item-center mb-2">
                       <Text style={{fontSize: hp(3)}} className="text-neutral-600 font-semibold">Elevate your style with <Text className="text-amber-400">US</Text></Text>
                  </View>

                   <View className="mx-2 flex-row justify-between item-center mb-2">
                       <Text style={{fontSize: hp(3)}} className="text-neutral-600 font-semibold">From your <Text className="text-amber-400">Home</Text></Text>
                    </View>

                    <View className="mx-1 flex-row item-center rounded-full bg-black/5 p-[6px]">
                          <TextInput placeholder ='Search Boutique' placeholderTextColor={"gray"}
                          style={{fontSize: hp(1.7)}}
                          className="flex-1 text-base mb-1 pl3 tracking-wider"/>
                    <View className="bg-white rounded-full p-3">
                          <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
                    </View>
                  </View>
                </View>
               </ScrollView>
             </View>
    );
};