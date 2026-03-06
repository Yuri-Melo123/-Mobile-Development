import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./indexStyles";


export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function verificarLogin() {
        return username === "admin@admin.com" && password === "admin";
    }

    function fazerLogin() {
        if (verificarLogin()) {
            router.push("/homeMens");
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