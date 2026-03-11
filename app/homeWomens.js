import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { styles } from "./homeStyles";

function fazerLogout() {
    router.push("/");
}

function masculino() {
    router.push("/homeMens");
}

function feminino() {
    router.push("/homeWomens");
}

export default function Home() {

    const [categoria, setCategoria] = useState("");
    const [produtos, setProdutos] = useState([]);

    async function buscarProdutos() {
        try {

        const url = `https://dummyjson.com/products/category/womens-${categoria}`;

        const response = await axios.get(url);
        const data = await response.data;

        setProdutos(data.products);

        } catch (error) {
        console.log(error);
        alert("Erro ao buscar produtos");
        }
    }

    function renderProduto({ item }) {
        return (
        <View style={styles.card}>
            <Image
            source={{ uri: item.thumbnail }}
            style={styles.image}
            />

            <Text style={styles.title}>
            {item.title}
            </Text>

            <Text style={styles.price}>
            ${item.price}
            </Text>
        </View>
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.nav}>
                <TouchableOpacity onPress={masculino}>
                <Text style={styles.navButton}>Produtos Masculinos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={feminino}>
                <Text style={[styles.navButton, {backgroundColor: "#ffffff", color: "#000000"}]}>Produtos Femininos</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>
                Digite a categoria
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Ex: dresses"
                value={categoria}
                onChangeText={setCategoria}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={buscarProdutos}
            >
                <Text style={styles.buttonText}>
                Buscar Produtos
                </Text>
            </TouchableOpacity>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProduto}
                numColumns={2}
            />

            <TouchableOpacity onPress={fazerLogout}>
                <Text style={styles.fazerLogout}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}