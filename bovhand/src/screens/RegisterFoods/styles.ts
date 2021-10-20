import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary
  },
  header: {
    flexDirection: 'row',
    height: '12%',
    width: '100%',
    backgroundColor: theme.colors.secondary
  },
  containerBack: {
    height: '100%',
    width: '25%',
  },
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  iconBack: {
    color: theme.colors.heading,
  },
  titleMenu: {
    justifyContent: 'flex-end',
    width: '75%'
  },
  title: {
    fontSize: 25,
    color: theme.colors.heading,
  },
  lineTop: {
    justifyContent: 'center',
    height: '3%',
    width: '100%',
    paddingHorizontal: 15,
  },
  lineCenter: {
    top: 15,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  body: {
    height: '100%',
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  scroll: {
    paddingHorizontal: 45,
    marginTop: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 3,
    paddingLeft: 6,
    borderColor: theme.colors.line
  },
  inputDay: {
    marginTop: 5,
    width: '20%',
    height: 40,
    borderWidth: 2,
    textAlign: 'center',
    marginRight: 12,
    borderColor: theme.colors.line
  },
  inputMonth: {
    marginTop: 5,
    width: '20%',
    height: 40,
    borderWidth: 2,
    textAlign: 'center',
    marginRight: 12,
    borderColor: theme.colors.line
  },
  inputYear: {
    marginTop: 5,
    width: '25%',
    height: 40,
    borderWidth: 2,
    textAlign: 'center',
    marginRight: 12,
    borderColor: theme.colors.line
  },
  date:{
    flexDirection: 'row'
  },
  text: {
    color: theme.colors.secondary,
    marginTop: 15
  },
  picker: {
    marginTop: 15,
    borderBottomWidth: 3,
    borderColor: theme.colors.line
  },
  currency: {
    marginTop: 5,
    width: '100%',
    height: 40,
    borderBottomWidth: 3,
    paddingLeft: 6,
    borderColor: theme.colors.line
  },
  errorText: {
    color: theme.colors.error
  },
  top: {
    height: '20%',
    width: '100%',
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scaleX: 0.5 }],
    backgroundColor: theme.colors.secondary,
  },
  buttonRegister: {
    marginTop: 20
  }
})