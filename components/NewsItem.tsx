import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { globalValue } from '../global/global';

export default function NewsItem() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainheading}>Decoin Enabled stop Limit order</Text>
            <Text style={styles.subheading}>12/10/21</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('12.7%'),
        width: wp('43%'),
        borderRadius:5,
        paddingLeft:globalValue.screenHorizontalSpace,
        paddingTop:globalValue.headingverticalSpace,
        backgroundColor:colors.background,
        marginRight:globalValue.screenHorizontalSpace,
    },
    mainheading: {
        fontSize: fonts.f21,
       fontFamily: "HurmeGeometric-Regular",
        color: colors.textmutedLight,
    },
    subheading: {
        paddingTop:hp('.7%'),
        fontSize: fonts.f16,
        fontWeight: "400",
        color: colors.textmutedDark,
    }

});
