import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  //Home
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  //Login
  return (
    <View style={styles.container}>
      <Text>Usuario:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese Usuario"
        onChangeText={(val) => setName(val)}
      />
      <Text>Contraseña:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Ingrese Contraseña"
        onChangeText={(val) => setAge(val)}
      />
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate('Lobby')}
      />
    </View>
  );
}
function LobbyScreen({navigation}) {
  //Lobby
  return (
    <View style={styles.container}>
      <Button
        title="Nueva venta"
        onPress={() => navigation.navigate('Venta')}
      />
      <Button title="Buscar" onPress={() => navigation.navigate('Busqueda')} />
    </View>
  );
}
function Ventap1Screen({navigation}) {
  //Ingreso de venta (Cliente nuevo/antiguo)
  return (
    <View style={styles.container}>
      <Button
        title="Registrar cliente"
        onPress={() => navigation.navigate('Registrar')}
      />
      <Button
        title="Cliente registado"
        onPress={() => navigation.navigate('Registrado')}
      />
    </View>
  );
}
function RegistroClienteScreen({navigation}) {
  state = {
    rut: '',
    nombre: '',
    ig: ''
 }
 handleig= (text) => {
    this.setState({ ig: text })
 }
 handlenombre = (text) => {
    this.setState({ nombre: text })
 }
 handlerut= (text) => {
    this.setState({ rut: text })
 }
 login = (rut,ig,nomb) => {
    alert('rut: ' + rut + ' ig: ' + ig+ ' nombre: ' + nomb)
 }
 render() {
    return (
       <View style = {styles.container}>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "rut"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handlerut}/>

          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "nombre"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handlenombre}/>

          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "ig"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleig}/>

          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.login(this.state.rut, this.state.ig, this.state.nombre)
             }>
             <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
       </View>
    )
  }
}
function Ventap2Screen({navigation}) {
  //Datos para venta
  return (
    <View style={styles.container}>
      <Text>Datos de venta</Text>
      <Button
        title="Finalizar Venta"
        onPress={() => navigation.navigate('Lobby')}
      />
    </View>
  );
}
function ValidacionRegScreen({navigation}) {
  //Validacion datos cliente antiguo
  return (
    <View style={styles.container}>
      <Text>Ingrese datos del cliente</Text>
      <Button title="Validar datos" />
      <Button title="Siguiente" onPress={() => navigation.navigate('Venta ')} />
    </View>
  );
}
function SearchScreen({navigation}) {
  //Panel de busqueda

  return (
    <View style={styles.container}>
      <Text>Seleccione apartado</Text>
      <Button title="Buscar" />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Bendise" component={HomeScreen} />
        <Stack.Screen name="Login" component={DetailsScreen} />
        <Stack.Screen name="Lobby" component={LobbyScreen} />
        <Stack.Screen name="Venta" component={Ventap1Screen} />
        <Stack.Screen name="Venta " component={Ventap2Screen} />
        <Stack.Screen name="Registrar" component={RegistroClienteScreen} />
        <Stack.Screen name="Registrado" component={ValidacionRegScreen} />
        <Stack.Screen name="Busqueda" component={SearchScreen} />
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
export default App;
