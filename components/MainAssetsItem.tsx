import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalValue, global } from '../global/global';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import ChartItem from './ChartsItem';

export default function MainAssetsItem(props: any) {

  return (
    <View style={styles.mainassetscontainer}>

      <View style={styles.imagecontainer}>
        <Image style={styles.itemimage} source={props.img} />
        <View>
          <Text style={styles.mainheading}>{props.currencyCode}</Text>
          <Text style={styles.text}>{props.currencyName}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.mainheading}>{props.value}</Text>
        <Text style={[styles.text, global.textRight]}>{props.price}</Text>
      </View>

      <ChartItem increment={props.increment}></ChartItem>

    </View>
  );
}

const styles = StyleSheet.create({

  mainassetscontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: globalValue.screenHorizontalSpace,
    borderTopColor: colors.borderColor,
    borderTopWidth: 1.5,
  },
  imagecontainer: {
    display: 'flex',
    width: wp('33%'),
    flexDirection: 'row'
  },
  itemimage: {
    height: wp('7.7%'),
    width: wp('7.8%'),
    marginRight: wp('3%'),
    borderRadius: 5,
    resizeMode: 'cover',
  },
  mainheading: {
    fontSize: fonts.f21,
    fontFamily: "HurmeGeometric-SemiBold",
    color: colors.text,
    includeFontPadding: false,
    letterSpacing:1
  },
  text: {
    fontSize: fonts.f15,
    fontWeight: "400",
    color: colors.textmutedDark,
    paddingTop:hp('.6%'),
    includeFontPadding: false
  },


});
