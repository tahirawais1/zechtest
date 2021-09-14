import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import Sparkline from 'react-native-sparkline'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { global } from '../global/global';
import LinearGradient from 'react-native-linear-gradient';

export default function ChartItem(props: any) {
    const data = Array.from({ length: 20 }).map(
        (unused, i) => i + (i + 1) * Math.random()
    )

    let colorvalue: any;

    const colordefine = (increment: boolean) => {

        colorvalue = increment ? { graph: '#00c896', gradient: '#00c89633' } : { graph: '#ff0000', gradient: '#f003' };

        return colorvalue
    };

    Sparkline.defaultProps = {
        color: colordefine(props.increment)?.graph,
        strokeWidth: 2,
        opacity: .2,
        width: wp('21%'),
        height: hp('2.4%'),
        padding: 0,
        sampling: 8
    }

    return (
        <View style={styles.mainassetscontainer}>
            <Text style={[styles.mainheading, { color: colordefine(props.increment)?.graph }]}>+2.4%</Text>

            <Sparkline data={data} >
                <Sparkline.Line />
                <Sparkline.Fill />
            </Sparkline>
            <LinearGradient colors={[colordefine(props.increment)?.gradient, colors.backgroundDark]} style={{ height: hp('2.9%'), width: wp('21%') }}>
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({

    mainassetscontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    mainheading: {
        fontSize: fonts.f19,
        textAlign: 'right',
        fontFamily: "HurmeGeometric-Bold",
        color: colors.primary,
        paddingBottom: hp('1%'),
        paddingTop: hp('2%')
    },


});
