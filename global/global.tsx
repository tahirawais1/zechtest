import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from './colors';


export const globalValue={
    
    screenHorizontalSpace:wp('3.8%'),
    screenVerticalSpace:hp('3.8%'),
    headingverticalSpace:hp('1.8%'),
    headinghorizontalSpace:wp('1.8%'),

}

export const global = StyleSheet.create({

    displayflex:{
        display:'flex',
        flexDirection:'row'
    },
    textRight:{
        textAlign:'right'
    },
    screenConstPaddings: {
        paddingLeft: globalValue.screenHorizontalSpace,
        paddingRight: globalValue.screenHorizontalSpace,
        paddingTop:globalValue.screenVerticalSpace,
        paddingBottom:globalValue.screenVerticalSpace,
    },
    backgroundColor:{
        backgroundColor:colors.background
    },
    backgroundColorDark:{
        backgroundColor:colors.backgroundDark
    },
    textcolor:{
        color:colors.text
    }
   
});

