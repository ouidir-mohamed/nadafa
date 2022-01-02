import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Notification } from 'rxjs';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={{flexGrow:1, justifyContent:"flex-start",backgroundColor:"white"
    }}>
  
  <Text style={styles.header}>Your current city</Text>
  <View style={{flexDirection:"row"}}>
  <Text style={styles.title}>Prochaines collectes</Text>
  <View style={styles.counterCard}><Text style={styles.counterText}>3</Text></View>
  </View>
  <CollectCard notification={true}/>
  <CollectCard notification={false}/>

  <Text style={styles.title}>Prochainement</Text>
  <CallendarView/>
    

        </ScrollView>
    );
}
const styles = StyleSheet.create({

    header:{
  color:"black",
  marginStart:15,
   fontWeight:"bold",
  fontSize:23,
  paddingTop:30,
  paddingBottom:30,

  fontFamily:"Aileron-Bold"
    },

    
    title:{
        color:"black",
        marginStart:15,
         fontWeight:"bold",
        fontSize:17,
       
        paddingBottom:12,
       marginTop:15,
        fontFamily:"Aileron-Bold"
          },


          
        collectContainer:{
      
      marginVertical:5,
      marginHorizontal:20,
      

           
        },
        collectionPress:{
            
          


        },
        
          collectCard:{
        
            paddingHorizontal:10,
            paddingVertical:8,
            borderRadius:5,
            borderWidth:1,
            borderColor:"#00000020",              
              flexDirection:"row",
              justifyContent:"space-between"
            


          },


          collectTitle:{
   fontSize:14,
   color:"black", 
   fontWeight:"bold"
          },

          collectTime:{
            fontSize:14,
          
                   },

  counterCard:{
    marginTop:15,

      marginHorizontal:5,
      alignItems:"center",
      justifyContent:"center",
      width:25,
      height:25,
      backgroundColor:"#585cff60",
      borderRadius:5,

  },
  counterText:{

    color:"#585cff",
    fontWeight:"bold",
    fontSize:18


    
  },
  calendarView:{

    marginHorizontal:15,
borderRadius:5,
marginBottom:50,
borderWidth:1,
borderColor:"#00000020", 

  }

});



  function CollectCard({notification}:{notification:boolean}) {
      console.log(notification,"new ");
      let  icon:JSX.Element;
     notification? icon=<Icon name="notifications-on" size={30} color="#585cff" />:icon=<Icon name="notifications-off" size={30} color="#585cff" />
    return (
     <View style={styles.collectContainer}>
        <Pressable  style={styles.collectionPress} >
      <View style={styles.collectCard} >
         <View>
          <Text style={styles.collectTitle}>Lorem ipsum dolor</Text>
          <Text style={styles.collectTime}>Mardi 19:00</Text>

      </View>
<Pressable android_ripple={{borderless:false}}>
          {notification? <Icon name="notifications-on" size={30} color="#585cff" />:<Icon name="notifications-none" size={30} color="#585cff" />}
</Pressable>

      </View>

      </Pressable>

      </View>
    )
}




 function CallendarView() {

    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'yellow'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
    return (
        <View style={styles.calendarView}>
        <Calendar

  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
//   renderArrow={direction => <Arrow />}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={0}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={false}
  // Disable right arrow. Default = false
  disableArrowRight={false}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
//   renderHeader={date => {
//    return(   <Text>{date.getMonth()}</Text>)
//     /*Return JSX*/
//   }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
  markingType={'multi-dot'}

  markedDates={{
    '2022-01-03':  {dots: [vacation,massage,workout], selected: false},
    '2022-01-05':  {dots: [vacation,massage,workout], selected: false},

    '2022-01-06':  {dots: [vacation,massage,workout], selected: false},

    '2022-01-07':  {dots: [vacation,massage,workout], selected: false},

   
   
  }}
  
/>

</View>
    )
}
