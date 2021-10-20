import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    top: {
        flexDirection: 'row',
        height: '15%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary
    },
    title: {
        color: theme.colors.white,
        fontSize: 20,
        marginTop: '30%',
    },
    header: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowLeft: {
        marginTop: '30%'
    },
    buttonLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: '100%',

    }
})