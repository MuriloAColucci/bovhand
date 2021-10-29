import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scroll: {
    paddingHorizontal: 40,
    marginTop: 20,
    width: "100%",
    marginBottom: 85
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 3,
    borderColor: theme.colors.line,
  },
  text: {
    color: theme.colors.secondary,
    marginTop: 15,
  },
  currency: {
    marginTop: 5,
    width: "100%",
    height: 40,
    borderBottomWidth: 3,
    paddingLeft: 6,
    borderColor: theme.colors.line,
  },
  errorText: {
    color: theme.colors.error,
  },
  picker: {
    marginTop: 15,
    borderBottomWidth: 3,
    borderColor: theme.colors.line,
  },
  top: {
    height: "20%",
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scaleX: 0.5 }],
    backgroundColor: theme.colors.secondary,
  },
  buttonRegister: {
    marginTop: 20,
    marginBottom: 15,
    width: '70%',
    alignSelf: 'center'
  },
});
