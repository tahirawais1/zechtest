import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalValue, global } from '../global/global';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import ChartItem from './ChartsItem';

export default function MainAssetsItem() {

  return (
    <View style={styles.mainassetscontainer}>

      <View style={styles.imagecontainer}>
        <Image style={styles.itemimage} source={require('../assets/bitcoin.webp')} />
        <View>
          <Text style={styles.mainheading}>BTC</Text>
          <Text style={styles.text}>Bitcoin</Text>
        </View>
      </View>

      <View>
        <Text style={styles.mainheading}>$1.213843</Text>
        <Text style={[styles.text, global.textRight]}>$89877</Text>
      </View>
      <ChartItem increment={true}></ChartItem>

    </View>
  );
}

const styles = StyleSheet.create({

  mainassetscontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: globalValue.headinghorizontalSpace,
    borderTopColor:colors.borderColor,
    borderTopWidth: 2,
  },
  itemimage: {
    height: wp('7.7%'),
    width: wp('7.8%'),
    marginRight: wp('2.2%'),
    marginTop: wp('1%'),
    borderRadius: 5,
    resizeMode:'cover',
  },
  mainheading: {
    fontSize: fonts.f19,
   fontFamily: "HurmeGeometric-Bold",
    color: colors.text,
  },
  text: {
    fontSize: fonts.f15,
    fontWeight: "400",
    color: colors.textmutedDark,
    marginTop: wp('.7%'),
  },
  imagecontainer:{
    display:'flex',
    width:wp('30%'),
    flexDirection:'row'
  }

});
