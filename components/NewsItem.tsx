import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { globalValue } from '../global/global';

export default function NewsItem(props: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.mainheading}>{props.heading}</Text>
            <Text style={styles.subheading}>{props.date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('12.7%'),
        width: wp('43%'),
        borderRadius:9,
        paddingLeft:wp('3%'),
        paddingRight:wp('3%'),
        paddingTop:globalValue.headingverticalSpace,
        backgroundColor:colors.background,
        marginRight:globalValue.screenHorizontalSpace,
        marginBottom:hp('1.4%'),
    },
    mainheading: {
        fontSize: fonts.f20,
       fontFamily: "HurmeGeometric-Regular",
        color: colors.textmutedLight,
        lineHeight:hp('2.8%')
    },
    subheading: {
        paddingTop:hp('.7%'),
        fontSize: fonts.f16,
        fontWeight: "400",
        color: colors.textmutedDark,
    }

});
