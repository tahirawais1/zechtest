import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HeaderIconItem() {
    return (
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <View style={styles.headingicon}>
                    <Image style={styles.itemimage} source={require('../assets/items.png')} />
                </View>
            </TouchableOpacity>
            <Text style={styles.headingiconText}>Exchange</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headingicon: {
        backgroundColor: colors.primarybackgroundLight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: wp('9.5%'),
        width: wp('9.5%'),
        borderRadius: 100
    },
    headingiconText: {
        paddingTop: hp('1%'),
        fontSize: fonts.f14,
        fontWeight: "600",
        color: colors.text,
    },
    itemimage: {
        height: hp('2.3%'),
        width: wp('3.7%'),
        resizeMode:'cover',

    },
});

