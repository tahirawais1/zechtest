import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { globalValue } from '../global/global';

export default function PromosItem() {
    return (
        <View style={styles.container}>
            <Image style={styles.itemimage} source={require('../assets/promositem.png')} />
            <Text style={styles.mainheading}>Market Maker Program</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemimage: {
        height: hp('22.5%'),
        width: wp('60%'),
        borderRadius: 5,
        resizeMode:'cover',
        marginRight: globalValue.screenHorizontalSpace,
    },
    mainheading: {
        paddingTop:hp('1%'),
        fontSize: fonts.f20,
        fontFamily: "HurmeGeometric-Regular",
        color: colors.textmutedLight,
        paddingLeft:wp('.3%'),
        paddingRight:globalValue.screenHorizontalSpace,
    },
});
