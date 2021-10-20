import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    title: {
        textAlign: 'center',
        color: theme.colors.white,
        fontSize: 20,
        paddingVertical: 10
    },
    top: {
        height: '28%',
        width: '100%',
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 200,
        borderBottomEndRadius : 200,
        overflow : 'hidden',
    },
    child: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        transform : [ { scaleX : 0.5 } ],
        backgroundColor: theme.colors.secondary
    },
    footer:{
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    conta:{
        color: theme.colors.secondary
    },
    criarconta:{
        color: theme.colors.primary,
    },
})