import {View , Text , StatusBar , ScrollView, Image , TextInput, SafeAreaView, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as React from 'react';
import { categories } from '../constants/data';



export default function Categories(){

return(

<View className="mt-4">

<ScrollView 
 horizontal
 showsHorizontalScrollIndicator={false}
 className="overflow-visible"
 contentContainerStyle={{paddingHorizontal:15}} >

{
   categories.map((category, index)=>{
      return (
        <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity className="p-1 rounded-full bg-gray-200">
                <Image style={{width:45,height:45}} source={category.Image} />
                 
              </TouchableOpacity>
              <Text>{category.name}</Text>
        </View>
      )
   })
}
 </ScrollView>
</View>

    )
}