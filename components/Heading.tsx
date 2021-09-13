import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';
import { globalValue } from '../global/global';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Heading(props:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>{props.headertext}</Text>
            <TouchableOpacity style={styles.headerbtn}>
                <Text style={styles.btnText}>{props.btntext}</Text>
                <Icon name={props.icon} size={fonts.f32} color={colors.primary}></Icon>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',        
        alignItems:'center',
        paddingTop:globalValue.screenVerticalSpace,
        paddingRight: globalValue.screenHorizontalSpace,
        paddingBottom: globalValue.headingverticalSpace
    },
    headertext: {
        fontSize: fonts.f29,
        fontFamily: "HurmeGeometric-Bold",
        color: colors.text,
    },
    headerbtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    btnText: {
        fontSize: fonts.f19,
        color: colors.primary,
        fontFamily: "HurmeGeometric-SemiBold",
        paddingRight:wp('.7%')
    },
    
});
