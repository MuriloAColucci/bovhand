import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',        
    },
    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 15,
        textAlign: 'center'
    },
})