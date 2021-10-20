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
    titleMenu:{
        justifyContent: 'flex-end',
        width: '75%'
    },
    title: {
        fontSize: 25,
        color: theme.colors.heading,
    },
    lineTop: {
        justifyContent: 'center',
        height: '3%',
        width: '100%',
        paddingHorizontal: 15,
    },
    lineCenter: {
        top: 15,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,     
    },
    body:{
        height: '100%',
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,        
    },
    containerButtons: {
        flex: 1,
        flexDirection: 'column',
        height: '50%',
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 5,
    },
    containerButtonsOne: {
        flex: 2,
        
        padding: 5,
    },
    buttonList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '100%',
        marginBottom: 5,
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.secondary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 60,
        elevation: 10,
    },
    buttonBirth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '100%',
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.secondary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 60,
        elevation: 10
    },
    buttonIcon:{
        marginTop: 15,
        marginBottom: 8
    },
    buttonText:{
        fontSize: 20
    },
    containerCounter: {
        height: '50%',
    },
})