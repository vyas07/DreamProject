import {View , Text , StatusBar , ScrollView, Image , TextInput, SafeAreaView,TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import { botiques } from '../constants/data';

export default function Botiques({title,description,image}){
    return(
<View className="mt-4">
<ScrollView 
 vertical
 showsVerticalScrollIndicator={false}
 className="overflow-visible"
 contentContainerStyle={{paddingHorizontal:15}} >

{
   botiques.map((botique, index)=>{
      return (
        
     <TouchableWithoutFeedback className="p-1 rounded-full bg-gray-200">
        <View className="mt-6 bg-white rounded-3xl shadow-lg">      
             <Image className=" flex h-40 w-80" source={botique.image} />
          <View className="px-3 pb-4 space-y-2">
             <Text className="font-bold text-lg pt-2">{botique.title}</Text>
            <View className = "flex-row items-center space-x-1">
            <Image className="h-4 w-4" source={botique.star} />
             <Text className="text-xs">
                <Text className="text-green-700">{botique.rating}</Text>
                <Text className="text-gray-700">({botique.reviews} reviews)</Text>
             </Text>
             </View>
          </View>
        </View>
     </TouchableWithoutFeedback>

      )
   })
}
 </ScrollView>
</View>
    )
}