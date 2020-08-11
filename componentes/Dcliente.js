import {styles} from './componentes/styles';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Inputs extends Component {
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
export default Inputs
