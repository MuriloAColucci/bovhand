import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%'
    },
    containerProfile: {
        alignItems: 'flex-end',
        marginRight: 15,
        height: '100%',
        width: '65%'
    },
    containerCircle: {
        alignItems: 'center',
        height: '100%',
        width: '25%',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textName: {
        marginTop: 5,
        fontSize: 15,
        marginRight: 5
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        width: '70%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: theme.colors.primary
    },
    drawer: {
        marginTop: 20
    }
})