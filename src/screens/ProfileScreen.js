
import {View , Text , StatusBar , ScrollView, Image , TextInput, SafeAreaView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { BellIcon , MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme/theme';
import Categories from '../components/categories';
import Botiques from '../components/botiqueList';
import { botiques } from '../constants/data';


export default function ProfileScreen(){
  return(
  <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="dark"/>
               <ScrollView showsVerticalIndicator={false}
               contentContainerStyle={{paddingBottom:50}}
               className="space-y-6 pt-4" >
               <View className="mx-2 flex-row justify-between item-center mb-2">
                       <Image source={require('../../images/icon.png')} style = {{width:hp(5.5),height: hp(5)}}/>
                       <BellIcon size={hp(4)} color="gray" />
                </View>
                <View className="flex-row  item-center space-x-1 border-o border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height = "20" width="20" stroke="gray"/>
                    <Text className="text-gray-600 font-bold">NewYork,NYC</Text>
                     </View>
                <View className="mx-2 space-y-2 mb-2">

                <View className="mx-2 flex-row justify-between item-center mb-2">
                      <Text style={{fontSize: hp(1.7)}} className="text-neutral-600 font-bold">Hello, Poornima!</Text>
                 </View>

                  {/* <View className="mx-2 flex-row justify-between item-center mb-2">
                       <Text style={{fontSize: hp(3)}} className="text-neutral-600 font-semibold">Elevate your style with <Text className="text-amber-400">US</Text></Text>
                  </View>

                   <View className="mx-2 flex-row justify-between item-center mb-2">
                       <Text style={{fontSize: hp(3)}} className="text-neutral-600 font-semibold">From your <Text className="text-amber-400">Home</Text></Text>
                    </View> */}

                    <View className="mx-1 flex-row item-center rounded-full bg-black/5 p-[6px]">
                          <TextInput placeholder ='Search Boutique' placeholderTextColor={"gray"}
                          style={{fontSize: hp(1.7)}}
                          className="flex-1 text-base mb-1 pl3 tracking-wider"/>
                    <View className="bg-white rounded-full p-4">
                          <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
                    </View>
                    <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-4 rounded-full">
                      <Icon.Sliders height = "20" width="20" strokeWidth={2.5} stroke="white" />
                    </View>
                  </View>
                </View>
                {/* main */}
                {/* categories */}
                <Categories />

               {/* Botique's */}
               {/* <View className="mt-5">
                {
                  [botiques,botiques,botiques].map((item,index)=>{
                    return (
                      <Botiques
                       key={index}
                       title={item.title}
                       botiques={item.botiques}
                       description={item.description}
                      />
                    )
                  })
                }
               </View> */}
             <Botiques />
               </ScrollView>
           </SafeAreaView>
    )
}