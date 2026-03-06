import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },

  nav: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginBottom: 10 
  },

  navButton: {
    backgroundColor: "#2f95dc",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%"
  },

  label: {
    fontSize: 18,
    marginBottom: 10
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },

  button: {
    backgroundColor: "#2f95dc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },

  card: {
    flex: 1,
    margin: 5,
    alignItems: "center"
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10
  },

  title: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center"
  },

  price: {
    fontWeight: "bold"
  },
  fazerLogout: {
    backgroundColor: "#FF3B30",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
});