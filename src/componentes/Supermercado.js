import { StyleSheet, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Supermercado({ imagem, nome, distancia }) {

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const isTablet = width > 700;

  const styles = StyleSheet.create({
    supermercado: {
      width: isTablet ? '40%' : '100%',
      marginTop: isTablet ? 30 : 10,
      marginLeft: isTablet ? '30%' : 0,
      position: 'relative',
      backgroundColor: '#ffaa',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: isTablet ? 10 : 20,
      paddingBottom: isTablet ? 10 : 20,
    },
    logoMercado: {
      width: 70,
      height: 70,
    },
    texto: {
      fontSize:isTablet ? 14 : 20,
    }
  });

  return (
    <TouchableOpacity style={styles.supermercado} onPress={() => { navigation.navigate('Detalhes Mercado', { imagemMercado: imagem, nomeMercado: nome, distanciaMercado: distancia }) }} >
      <Image source={imagem} style={styles.logoMercado} />
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>Distância: {distancia}</Text>
    </TouchableOpacity>
  );
}

