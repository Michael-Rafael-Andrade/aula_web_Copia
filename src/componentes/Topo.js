import { StyleSheet, View, Image, Text } from "react-native";

import logo from '../imagens/logo.png';

export default function Topo() {
    return (
        <View style={styles.topo}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoTexto}>SuperMarkets</Text>
            <Text style={styles.sloganTexto}>Seus supermercados favoritos em um só lugar!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#aa66ff',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
  },
  logoTexto: {
    fontSize: 32,
    color: '#fff',
    marginTop: 20,
  },
  sloganTexto: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
});

