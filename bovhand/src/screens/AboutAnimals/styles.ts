import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary
    },
    header: {
        flexDirection: 'row',
        height: '12%',
        width: '100%',
        backgroundColor: theme.colors.secondary
    },
    containerBack: {
        height: '100%',
        width: '25%',
    },
    buttonBack: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100%',
    },
    iconBack:{
        color: theme.colors.heading,
    },
    buttonEdit: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        height: '100%',
    },
    iconEdit:{
        color: theme.colors.heading,
    },
    titleMenu:{
        justifyContent: 'flex-end',
        width: '60%'
    },
    title: {
        fontSize: 25,
        color: theme.colors.heading,
    },
    lineTop: {
        justifyContent: 'center',
        height: '3%',
        width: '100%',
    },
    lineCenter: {
        top: 15,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.primary,   
    },
    front: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: theme.colors.background
    },
    arrowLeft: {
        marginTop: '30%'
    },
})