import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  header: {
    flexDirection: "row",
    height: "12%",
    width: "100%",
    backgroundColor: theme.colors.secondary,
  },
  containerBack: {
    height: "100%",
    width: "25%",
  },
  buttonBack: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
  iconBack: {
    color: theme.colors.heading,
  },
  titleMenu: {
    justifyContent: "flex-end",
    width: "75%",
  },
  title: {
    fontSize: 25,
    color: theme.colors.heading,
  },
  lineTop: {
    justifyContent: "center",
    height: "3%",
    width: "100%",
    paddingHorizontal: 15,
  },
  lineCenter: {
    top: 15,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  body: {
    height: "100%",
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
  },
  containerButtons: {
    flex: 1,
        flexDirection: 'column',
        width: '100%',
        marginTop: 30,
        marginBottom: 20,
        paddingHorizontal: 5,
  },
  containerButtonsOne: {
    flex: 2,
    padding: 5,
  },
  buttonAnimal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    width: "90%",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.secondary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 60,
    elevation: 10,
  },
  iconEnter:{
    color: theme.colors.primary,
    
  },
  text: {
    color: theme.colors.secondary,
    padding: 4,
    fontSize: 15
  },
  textBirthday:{
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: 17
  },
  infoPrincipal:{
    marginLeft: 15,
    width: '35%'
  },
  infoBirthday:{
    marginRight: 0,
    width: '50%',
    alignItems: 'flex-end'
  }
});
