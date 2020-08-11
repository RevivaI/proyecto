import { StyleSheet, Platform, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { Component } from 'react';
import Realm, {cliente,add_cliente} from '../database/schemas';
import {styles} from './styles';
let realm ;

export default class RegistroCliente extends Component{
  constructor(){

    super();

    this.state = {
      ig : '',
      Nombre : '',
      rut : ''
    }
  }
  render() {
    return (
        <View style={styles.MainContainer}>
          <TextInput
                placeholder="Ingresar usuario instagram"
                style = { styles.TextInputStyle }
                underlineColorAndroid = "transparent"
                onChangeText = { ( text ) => { this.setState({ ig: text })} }
              />
          <TextInput
                placeholder="Ingresar nombre completo"
                style = { styles.TextInputStyle }
                underlineColorAndroid = "transparent"
                onChangeText = { ( text ) => { this.setState({ nombre: text })} }
              />
          <TextInput
                placeholder="Ingresar rut"
                style = { styles.TextInputStyle }
                underlineColorAndroid = "transparent"
                onChangeText = { ( text ) => { this.setState({ rut: text })} }
              />
          <TouchableOpacity onPress={this.add_cliente} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}> Siguiente onPress={this.add_cliente} </Text>
          </TouchableOpacity>
        </View>

    );
  }




}
