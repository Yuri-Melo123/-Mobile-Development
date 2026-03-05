import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function fazerLogout() {
    router.push("/");
}

export default function products() {

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Produtos</Text>
            <TouchableOpacity onPress={fazerLogout}>
                <Text style={styles.buttonLogout}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}



const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#2567e8",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontStyle: "bold",
        fontFamily: "Arial",
        marginBottom: 20,
        color: "#fff"
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "Arial",
        marginBottom: 20,
        color: "#fff"
    },
    text: {
        fontSize: 14,
        fontFamily: "Arial",
        color: "#333",
        paddingBottom: 5
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
    buttonLogout: {
        backgroundColor: "#FF3B30",
        color: "#fff",
        fontStyle: "bold",
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20
    }
});