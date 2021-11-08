import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    containerList: {
        flex: 1,
        marginLeft: 20,
        marginRight: 10,
    },
    text: {
        color: theme.colors.secondary,
        marginTop: 5,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        marginTop: 5,
        borderColor: theme.colors.line,
        borderBottomWidth: 1
    },
    deleteContainer: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    delete: {
        flex: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        borderTopColor: theme.colors.line,
        borderTopWidth: 3,
        marginTop: 5
    },
    

})