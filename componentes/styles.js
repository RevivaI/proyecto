import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({

 MainContainer :{

  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: (Platform.OS) === 'android' ? 20 : 0,
  margin: 10

  },

  TextInputStyle:
    {
      borderWidth: 2,
      borderColor: '#89CFF0',
      width: '100%',
      height: 40,
      borderRadius: 50,
      marginBottom: 20,
      textAlign: 'center',
    },

  button: {

      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: '#9966CC',
      borderRadius:7,
      marginTop: 12
    },

  TextStyle:{
      color:'#fff',
      textAlign:'center',
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

});
