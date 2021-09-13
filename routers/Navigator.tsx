import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { colors } from '../global/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { globalValue } from '../global/global';
import { fonts } from '../global/fonts';

function HomeScreen() {
  return (
    <Home></Home>
  );
}

function Marketscreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Market!</Text>
    </View>
  );
}
function Tradescreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tradescreen!</Text>
    </View>
  );
}
function Walletscreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Walletscreen!</Text>
    </View>
  );
}
function DTradescreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DTradescreen!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textmutedLight,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.backgroundDark,
          paddingBottom: globalValue.headingverticalSpace,
          paddingTop: globalValue.headingverticalSpace,
          height: hp('10%')
        },
        tabBarLabelStyle:{
          fontSize:fonts.f13,
          fontFamily:'HurmeGeometric-Bold'
        },
        tabBarIcon: ({ focused, color }) => {
          let imageName;

          if (route.name === 'Home') {
            imageName = focused ? require('../assets/item.webp') : require('../assets/item.webp');
          } else if (route.name === 'Market') {
            imageName = focused ? require('../assets/item.webp') : require('../assets/item.webp');
          }
          else if (route.name === 'Trade') {
            imageName = focused ? require('../assets/item.webp') : require('../assets/item.webp');
          }
          else if (route.name === 'Wallet') {
            imageName = focused ? require('../assets/item.webp') : require('../assets/item.webp');
          }
          else if (route.name === 'DTrade') {
            imageName = focused ? require('../assets/item.webp') : require('../assets/item.webp');
          }
          return <Image style={styles.itemimage} source={imageName} />
            ;
        },
      })}>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Market" component={Marketscreen} />
        <Tab.Screen name="Trade" component={Tradescreen} />
        <Tab.Screen name="Wallet" component={Walletscreen} />
        <Tab.Screen name="DTrade" component={DTradescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

  itemimage: {
    height: hp('2.8%'),
    width: wp('4.2%'),
    resizeMode:'cover',

  },

});