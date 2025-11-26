import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Supermercados from './src/componentes/Supermercados';
import DetalhesMercado from './src/componentes/DetalhesMercado';

const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer> 
    <Stack.Navigator>
      <Stack.Screen name="Supermercados" component={Supermercados} />
      <Stack.Screen name="Detalhes Mercado" component={DetalhesMercado} />
    </Stack.Navigator>
  </NavigationContainer>
}