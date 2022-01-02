

import React, { useEffect, useState } from 'react';
import {
  Button,
  ProgressBarAndroid,
  ProgressBarAndroidBase,
  ProgressBarAndroidComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { callApi, messageService } from '../message-service';
import { barStyle, styles } from './styles/home-style';



export const Home=()=>{
    const[message,setMessage]=useState("");
    const[loading,setLoading]=useState(false);


    useEffect(() => {
  
      messageService.onLoading().subscribe(
          loading=>{
              setLoading(loading);
          }
      );
    
    }, [])
    
    
     
function callAndSubscribe(){
    messageService.onMessage().subscribe(message => {
        setMessage(message);
  
});
}

      return (
        <SafeAreaView style={styles.backgroundStyle}>
          <StatusBar barStyle={barStyle} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.backgroundStyle}>
            
            <View
              style={styles.viewStyle}>
              <Button
              title='Add'
              onPress={callAndSubscribe}>
    
    
              </Button>
              <Text>
                {message}
              </Text>
                {
             
              loading? <ProgressBarAndroid  />:null
                }
    
    
    
    
            
            </View>
          </ScrollView>
        </SafeAreaView>
      );

}


