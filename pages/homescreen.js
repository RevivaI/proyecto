import  * as React from 'react';
import { View, Text, Button} from 'react-native';
import Realm from 'realm';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
let realm;

export function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
      <Button
        title="Agregar Pedido"
        onPress={() => navigation.navigate('Nuevo Pedido')}/>
      <Button
        title="Menu"
        onPress={() => navigation.navigate('Nuevo Pedid')}
      />
    </View>
  );
};
