import { router } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function verificarLogin() {
        return username === "admin@admin.com" && password === "admin";
    }

    function fazerLogin() {
        if (verificarLogin()) {
            router.push("/home");
        } else {
            Alert.alert("Erro", "Username ou senha inválidos");
        }
    }

    return (
        <View style={styles.background}>
            
            <Text style={styles.title}>Bem-vindo de Volta!</Text>
            <Text style={styles.subtitle}>Insira seus dados para entrar na sua conta.</Text>

            <View style={styles.container}>

                <Text style={styles.textAlert}>Username ou senha inválidos</Text>

                <Text style={styles.textUsername}>Username</Text>
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="" 
                    onChangeText={setUsername}
                    value={username}
                />
                <Text style={styles.textEmpty}>! Campo obrigatório</Text>

                <Text style={styles.textPassword}>Senha</Text>
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="" 
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <Text style={styles.textEmpty}>! Campo obrigatório</Text>
                
                <TouchableOpacity onPress={fazerLogin}>
                    <Text style={styles.buttonLogin}>Entrar</Text>
                </TouchableOpacity>
            </View>
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