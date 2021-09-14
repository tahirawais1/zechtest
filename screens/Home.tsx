import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { globalValue } from '../global/global';
import PromosItem from '../components/PromosItem';
import NewsItem from '../components/NewsItem';
import Heading from '../components/Heading';
import MainAssetsItem from '../components/MainAssetsItem';
import HeaderIconItem from '../components/headerIconItem';

class Home extends Component {

  render() {
    const topicons = () => {
      return ['a', 'b', 'c', 'd', 'e'].map((element) => {
        return (
          <HeaderIconItem></HeaderIconItem>
        );
      });
    };
    const promosItem = () => {
      return ['a', 'b', 'c', 'd', 'e'].map((element) => {
        return (
          <ScrollView horizontal={true}>
            <PromosItem></PromosItem>
          </ScrollView>
        );
      });
    };
    const newsItem = () => {
      return [
        {heading:'Decoin Enabled stop Limit order',date:'12/10/2021'},
        {heading:'Decoin Enabled stop Limit order',date:'12/10/2021'},
        {heading:'Decoin Enabled stop Limit order',date:'12/10/2021'},
        {heading:'Decoin Enabled stop Limit order',date:'12/10/2021'},
      ].map((element) => {
        return (
          <ScrollView horizontal={true}>
            <NewsItem heading={element.heading} date={element.date}></NewsItem>
          </ScrollView>
        );
      });
    };
    const mainAssetsItem = () => {
      return ['a', 'b', 'c', 'd', 'e'].map((element) => {
        return (
          <ScrollView>
            <MainAssetsItem></MainAssetsItem>
          </ScrollView>
        );
      });
    };

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Icon name="user-circle" size={fonts.f28} color={colors.primary} ></Icon>
            <Text style={styles.mainheader}>Decoin Home</Text>
            <View style={styles.iconContainer}>
              {topicons()}
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <Heading headertext='Promos' btntext='See All' icon='navigate-next' ></Heading>
            <ScrollView horizontal={true}>
              {promosItem()}
            </ScrollView>
          </View>
          <View style={styles.bodyContainer}>
          <Heading headertext='News' btntext='See All' icon='navigate-next' ></Heading>
            <ScrollView horizontal={true}>
              {newsItem()}
            </ScrollView>
          </View>
          <View style={styles.bodyContainer}>
          <Heading headertext='Main Cryptoassets' btntext='Buy Crypto' icon='credit-card' ></Heading>
            {mainAssetsItem()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    paddingBottom: globalValue.screenVerticalSpace,

  },
  mainheader: {
    fontSize: fonts.f50,
   fontFamily: "HurmeGeometric-Bold",
    color: colors.text,
    paddingTop: globalValue.headingverticalSpace,
    paddingBottom:globalValue.screenVerticalSpace, 
  },
  topContainer: {
    backgroundColor: colors.background,
    paddingLeft: globalValue.screenHorizontalSpace,
    paddingRight: globalValue.screenHorizontalSpace,
    paddingTop: globalValue.screenVerticalSpace,
    paddingBottom: globalValue.headingverticalSpace,
    borderBottomColor: colors.backgroundLight,
    borderBottomWidth: 1,
  },
  iconContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContainer:{
    backgroundColor: colors.backgroundDark,
    paddingLeft: globalValue.screenHorizontalSpace,
  }
});
