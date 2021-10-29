import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },

    infos: {
        height: '100%',
    },
})