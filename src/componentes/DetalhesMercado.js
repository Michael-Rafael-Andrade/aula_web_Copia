import { Text, Image, StyleSheet } from "react-native";
import Topo from "./Topo";

export default function DetalhesMercado({ route }) {

    const {imagemMercado, nomeMercado, distanciaMercado} = route.params;

    return <>
        <Topo />
        <Image source={imagemMercado} style={estilos.imagem} />
        <Text>{nomeMercado}</Text>
        <Text>Distância: {distanciaMercado}</Text>
    </>
}

const estilos = StyleSheet.create({
    imagem: {
        width: 100,
        height: 100,
    }
});