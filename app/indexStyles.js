import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#2567e8",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
        height: 300,
        borderWidth: 1,
        borderBlockColor: "#ccc",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#ccc",
    },
    title: {
        fontSize: 30,
        fontStyle: "bold",
        fontFamily: "Arial",
        marginBottom: 20,
        color: "#fff"
    },
    subtitle: {
        fontSize: 15,
        fontFamily: "Arial",
        marginBottom: 20,
        color: "#fff"
    },
    textAlert: {
        fontSize: 14,
        fontFamily: "Arial",
        color: "#FF3B30",
        paddingBottom: 25,
        display: "none"
    },
    textUsername: {
        fontSize: 14,
        fontFamily: "Arial",
        color: "#333",
        paddingBottom: 5,
        paddingRight: 170
    },
    textPassword: {
        fontSize: 14,
        fontFamily: "Arial",
        color: "#333",
        paddingBottom: 5,
        paddingRight: 190
    },
    textEmpty: {
        fontSize: 12,
        fontFamily: "Arial",
        color: "#FF3B30",
        paddingBottom: 10,
        paddingRight: 130,
        display: "none"
    },
    TextInput: {
        width: "80%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    buttonLogin: {
        backgroundColor: "#007AFF",
        color: "#fff",
        fontStyle: "bold",
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20
    },
});