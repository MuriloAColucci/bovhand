import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        height: '15%',
        width: '100%',
        backgroundColor: theme.colors.secondary
    },
    farmTitle: {
        color: theme.colors.white,
        fontSize: 20,
        marginTop: getStatusBarHeight() +5,
    },
    farmMenu:{
        alignItems: 'center',
        height: '50%'
    },
    name: {
        color: theme.colors.white,
        fontSize: 20,
        marginLeft: '5%'
    },
    topName: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '50%',
    },
    buttonRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: '100%',
    },
    front: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    arrowLeft: {
        marginTop: '30%'
    },
})