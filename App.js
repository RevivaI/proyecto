
import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Agregar Pedido"
        onPress={() => navigation.navigate('Nuevo Pedido')}
      />

      <Button
        title="Menu"
        onPress={() => navigation.navigate('Nuevo Pedido')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text>Enter name:</Text>
      <TextInput style={styles.input} placeholder='ingresar dato' onChangeText={(val)=>setName(val)}/>
      <Text>Enter name:</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.input} placeholder='ingresar dato' onChangeText={(val)=>setAge(val)}/>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nuevo Pedido" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width: 200,
  },
});
export default App;
