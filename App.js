import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
 container: {
    paddingTop: 23
 },
 input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
})
