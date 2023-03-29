import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Bolofuba() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Bolo de Fubá</Text>
      <Image style={estilo.img}  source={require('../assets/bolo-fuba.jpg')} />
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  titulo:{
    alingtext: 'center',
    fontSize:30,
    marginBottom: 50
  },
  img:{
    width: 300,
    height: 200, 
    borderRadius: 5
  }

});