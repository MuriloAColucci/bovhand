import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 50,
        marginBottom: 60,    
    },
    form:{
      width: '100%',
      marginTop: 40
    },
    input: {
      height: 40,
      borderBottomWidth: 2,
      borderColor: theme.colors.line
    },
    text: {
        color: theme.colors.secondary,
        marginTop: 20
    },
    forgot: {
      color: theme.colors.primary,
      textAlign: 'right',
      marginBottom: 30,
    },
    errorText:{
      color: theme.colors.error
    }
})