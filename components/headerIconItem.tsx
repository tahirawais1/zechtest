import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HeaderIconItem(props: any) {
    return (
        <TouchableOpacity>
            <View style={styles.iconContainer}>
                <Image style={styles.itemimage} source={props.img} />
                <Text style={styles.headingiconText}>{props.name}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headingiconText: {
        paddingTop: hp('1%'),
        fontSize: fonts.f14,
        fontWeight: "600",
        color: colors.text,
    },
    itemimage: {
        height: wp('10.6%'),
        width: wp('10.6%'),
        resizeMode: 'cover',
    },
});

