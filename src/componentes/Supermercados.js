import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import carrefour from '../imagens/carrefour.png';
import cd from '../imagens/cd.png';
import epa from '../imagens/epa.png';
import extra from '../imagens/extra.png';

import Topo from "./Topo";
import Supermercado from "./Supermercado";

export default function Supermercados() {
    return <>
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Topo />
            <View style={styles.supermercados}>
            <FlatList 
            data={supermercados.lista}
            renderItem={({item}) => <Supermercado {...item} />}
            />
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    </> 
        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa66ff',
    alignItems: 'center',
    overflow: 'scroll',
  },
  supermercados: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffaa00',
  },
});

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const supermercados ={
  titulo: 'Supermercados',
  lista: [
    {
      imagem: carrefour,
      nome: 'Carrefour',
      distancia: gerarNumeroAleatorio(1, 1500) + 'm',
    },
    {
      imagem: cd,
      nome: 'Coelho Diniz',
      distancia: gerarNumeroAleatorio(1, 1500) + 'm',
    },
    {
      imagem: epa,
      nome: 'Epa',
      distancia: gerarNumeroAleatorio(1, 1500) + 'm',
    },
    {
      imagem: extra,
      nome: 'Extra',
      distancia: gerarNumeroAleatorio(1, 1500) + 'm',
    },
  ]
}