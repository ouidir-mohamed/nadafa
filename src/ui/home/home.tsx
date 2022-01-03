import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Calendar, CalendarList, CalendarProvider, WeekCalendar } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';



import { Notification } from 'rxjs';

export default function HomeScreen({ navigation, route }: any) {
  console.log(route)
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1, justifyContent: "flex-start", backgroundColor: "#ffffff00"
    }}>
      <View style={styles.headerContainer}>
        <AntDesign name="home" size={30} color="#585cff" />



        <Text style={styles.header}>{route.params.ville}</Text>
        <Pressable android_ripple={{ borderless: false }} style={styles.editIcon}>
          <Feather name="edit" size={20} color="#585cff" />
        </Pressable>

      </View>



      <View style={styles.titleContainer}>
        {/* <Ionicons name="timer-outline" size={20} color="#585cff" /> */}

        <Text style={styles.title}>Collectes d'aujordhui</Text>
        <View style={styles.counterCard}><Text style={styles.counterText}>2</Text></View>
      </View>
      <CollectCard notification={true} color={"red"} />
      <CollectCard notification={false} color={"purple"} />

      <View style={styles.titleContainer}>
        {/* <Feather name="calendar" size={20} color="#585cff" /> */}
        <Text style={styles.title}>Collectes de cette semaine</Text>
        <View style={styles.counterCard}><Text style={styles.counterText}>5</Text></View>
      </View>
      <CallendarView />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mardi 03 Décembre</Text>
        <View style={styles.counterCard}><Text style={styles.counterText}>5</Text></View>

      </View>
      <CollectCard notification={true} color="blue" />
      <CollectCard notification={false} color="orange" />
      <CollectCard notification={false} color="green" />
      <CollectCard notification={false} color="blue" />
      <CollectCard notification={true} color="orange" />
      <CollectCard notification={true} color="green" />
      <CollectCard notification={false} color="blue" />
      <CollectCard notification={true} color="orange" />
      <CollectCard notification={false} color="green" />


    </ScrollView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "baseline",
    flexDirection: "row",
    marginStart: 10,
    paddingTop: 30,
    paddingBottom: 30,

  },
  header: {
    marginStart: 5,
    color: "black",
    fontWeight: "bold",
    fontSize: 23,


    fontFamily: "Aileron-Bold"
  },

  titleContainer: {
    flexDirection: "row", alignItems: "flex-end",
    marginStart: 10,
    paddingBottom: 12,
    marginTop: 25,

  },
  title: {
    color: "black",
    marginStart: 2,
    fontWeight: "bold",
    fontSize: 19,


    fontFamily: "Aileron-Bold"
  },


  editIcon: {
    marginStart: 15,
  },


  counterCard: {


    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: "#585cff60",
    borderRadius: 5,

  },
  counterText: {

    color: "#585cff",
    fontWeight: "bold",
    fontSize: 18



  },
  calendarView: {

    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#00000010",
    elevation: 0.5,
    backgroundColor: "white"


  }

});



function CollectCard({ notification, color }: { notification: boolean, color: string }) {
  const styles = StyleSheet.create({



    collectContainer: {

      marginVertical: 8,
      marginHorizontal: 20,
      borderRadius: 8,
      borderWidth: 0,
      borderTopColor: "#00000010",
      borderRightColor: "#00000010",
      borderBottomColor: "#00000010",
      borderLeftWidth: 5,
      borderLeftColor: "#585cff",

      backgroundColor: "white",
      elevation: 0,
    },


    collectCard: {

      paddingHorizontal: 10,
      paddingVertical: 10,

      flexDirection: "row",
      justifyContent: "space-between"
      , alignItems: "center"


    },


    collectTitle: {
      fontSize: 15,
      color: "black",
      fontWeight: "bold",
      paddingVertical: 4
    },

    collectTime: {
      fontSize: 15,
      paddingVertical: 4

    },
  });
  return (
    <View style={styles.collectContainer}>
      <Pressable android_ripple={{ borderless: false }} >
        <View style={styles.collectCard} >
          <View >
            <Text style={styles.collectTitle}>Lorem ipsum dolor</Text>
            <Text style={styles.collectTime}>Mardi 19:00</Text>

          </View>
          <Pressable android_ripple={{ borderless: false }}>
            {notification ? <Icon name="notifications-on" size={30} color="#585cff" /> : <Icon name="notifications-none" size={30} color="#585cff" />}
          </Pressable>

        </View>

      </Pressable>

    </View>
  )
}




function CallendarView() {

  const vacation = { key: 'vacation', color: 'purple' };
  const massage = { key: 'massage', color: 'orange' }
  const workout = { key: 'workout', color: 'green' };


  return (
    <View style={styles.calendarView} >
      <CalendarProvider

        date={"2022-01-03"}

        showTodayButton={false}
        disabledOpacity={0.6}
        // theme={this.todayBtnTheme}
        todayBottomMargin={-40}
        todayButtonStyle={{}}

      >
        <WeekCalendar firstDay={1} markingType={'multi-dot'}
          allowShadow={false}
          markedDates={{
            '2022-01-03': { dots: [vacation, massage, workout], },
            '2022-01-04': { dots: [massage, workout], }
          }}
          maxDate="2022-01-09" minDate={"2022-01-03"} scrollEnabled={false}>

        </WeekCalendar>
      </CalendarProvider>

    </View>
  )
}
