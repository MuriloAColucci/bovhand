import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    },
    scroll: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 30,
        width: '100%',
    },

    text: {
        color: theme.colors.secondary,
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
      width: '100%',
      borderBottomWidth: 1,
      marginTop: 5,
      fontSize: 15,
      borderColor: theme.colors.line
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

})