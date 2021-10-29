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

    text: {
        color: theme.colors.secondary,
        marginTop: 15
    },
    input: {
      width: '100%',
      height: 40,
      borderBottomWidth: 3,
      borderColor: theme.colors.line
    },

})