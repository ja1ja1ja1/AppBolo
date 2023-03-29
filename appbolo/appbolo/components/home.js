import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>As melhores Receitas de Bolo </Text>
      <Image style={estilo.img} source={require('../assets/principal-bolo.jpg')} />

      <TouchableOpacity style={estilo.button}  onPress={()=>{props.navigation.navigate('BoloChocolate')}}>
        <Text> Bolo de Chocolate </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.button}  onPress={()=>{props.navigation.navigate('BoloFuba')}}>
        <Text> Bolo de Fubá </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.button} onPress={()=>{props.navigation.navigate('BoloMilho')}}>
        <Text > Bolo de Milho </Text>
      </TouchableOpacity>

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
  },
  button:{
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'aliceblue',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    marginTop: 30
  }

});