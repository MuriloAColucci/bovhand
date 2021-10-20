import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    },
    scroll: {
        paddingHorizontal: 40,
        marginTop: 20,
        width: '100%',
    },
    input: {
      width: '100%',
      height: 40,
      borderBottomWidth: 3,
      borderColor: theme.colors.line
    },
    text: {
        color: theme.colors.secondary,
        marginTop: 15
    },
    errorText:{
      color: theme.colors.error
    },
    top: {
      height: '20%',
      width: '100%',
      transform : [ { scaleX : 2 } ],
      borderBottomStartRadius : 200,
      borderBottomEndRadius : 200,
      overflow : 'hidden',
  },
  child: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      transform : [ { scaleX : 0.5 } ],
      backgroundColor: theme.colors.secondary,
  },
  buttonRegister: {
    marginTop: 20
  }    
})