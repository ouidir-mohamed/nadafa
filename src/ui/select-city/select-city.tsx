import React, { ClassAttributes, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { elementAt } from 'rxjs';
import CityIcon  from '../../../assets/svg/city2.svg';
import { citiesService } from '../../services/cities-service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationAction } from '@react-navigation/routers';

const SelectCity = ( {navigation}:any ) => {


 const [filteredData, setFilteredData] = useState<string[]>([]);
 const [selectedValue, setSelectedValue] = useState<string>("");
 

 useEffect(() => {
    citiesService.filteredCities$().subscribe(
        cities=>{
            setFilteredData(cities);   
        }
    );


    citiesService.selectedCity$().subscribe(
        city=>{
            setSelectedValue(city);
        }
    )
  
 }, [])


    return (
        <ScrollView contentContainerStyle={{flexGrow:1, justifyContent:"space-between",backgroundColor:"white"
      }}>

        <View >
       
        <View style={styles.image}>

 
  
  
<CityIcon width={250} height={150} fill="#000" />

</View>

<Text style={styles.header}>Selectionner votre ville</Text>
<Text style={styles.text}>Selectionner d'abbord votre ville actuelle puis appuyer sur suivant </Text>


<View style={styles.container}>
            <Autocomplete
            inputContainerStyle=
            {styles.input}
         
      data={filteredData}
      defaultValue={selectedValue}
      onChangeText={(text) => citiesService.filterCities(text)}
      placeholder='Search'
      flatListProps={{
     keyExtractor: (_, idx) => idx.toString(),
        renderItem: ({ item })=> 
        <TouchableOpacity
        onPress={() => {
            citiesService.selectCity(item);
            citiesService.filterCities("");
          }}
        >

            
              <Text style={styles.itemText}>{item}</Text>

              </TouchableOpacity>
            
      }}
      
    
    />

        </View>

        </View>
  <View style={styles.buttonView}>
<Pressable style={styles.button} onPress={()=>{
   navigation.navigate('Home',{ ville: selectedValue });
   
   }}  android_ripple={{borderless:true}} >
      <Text style={styles.buttonText}>Suivant</Text>
    </Pressable>

</View>
        </ScrollView>

    )

}

export default SelectCity;





const styles = StyleSheet.create({

    header:{
  color:"black",
  textAlign:"center",
   fontWeight:"bold",
  fontSize:23,
  paddingTop:30,
  paddingBottom:12,

  fontFamily:"Aileron-Bold"
    },
    container: {
 
      flexShrink: 1,
      padding: 16,
       marginTop:20,
    //   position: 'absolute',
    //   left: 0,
    //   right:0,
    // top: 200,
    

    zIndex: 1

    },

    input: {
        margin: 0,
        borderWidth: 0,
        borderRadius:8,
      
        elevation:2,
      shadowRadius:88,
        paddingVertical:5,
        paddingHorizontal: 10,
        backgroundColor:"white",
        marginTop:20,
      },

    
 

    itemText: {
  color:"black",
  fontSize: 16,
  paddingVertical:10,
  paddingHorizontal:5,
  margin:0,
  fontFamily:"Aileron-Regular",

      
    },


    image:{
     
      paddingTop:50,
     
       justifyContent:'center',
      alignItems:"center",
       alignSelf:"center",
      
    },

    text:{
      marginHorizontal:25,
      textAlign:"center"

    },

    buttonsContainer:{
      paddingHorizontal:20,
    
    },

    button: {
   

     
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 13,
      paddingHorizontal: 100,
      borderRadius: 8,
      elevation: 0,
      borderWidth:0,
      backgroundColor: '#585cff',
      
    },
    buttonView: {
      
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderRadius: 8,
      elevation: 2,
      marginBottom: 30,
      marginHorizontal:30,
      
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
 
  });