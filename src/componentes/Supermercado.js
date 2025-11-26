import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Supermercado({imagem, nome, distancia}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.supermercado} onPress={() => {navigation.navigate('Detalhes Mercado', {imagemMercado: imagem, nomeMercado: nome, distanciaMercado: distancia})}} >
            <Image source={imagem} style={styles.logoMercado} />
            <Text>{nome}</Text>
            <Text>Distância: {distancia}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  supermercado: {
    width: '40%',
    marginTop: 30,
    marginLeft: '30%',
    position: 'relative',
    backgroundColor: '#ffaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoMercado: {
    width: 70,
    height: 70,
  },
});